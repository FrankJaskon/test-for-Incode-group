import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {io} from 'socket.io-client';
import {setTickersData, setHiddenTicker, setTrackedTicker, setIsConnected} from '../../redux/app-reducer';
import {getTickers, getIsConnected, getHiddenTickers} from '../../redux/app-selectors';
import Ticker from './ticker';
import TickerHeader from './ticker/ticker-header';
import Preloader from '../../common/preloader';

import s from './TickerList.module.css';

const TickerList = ({isConnected, tickers, hiddenTickers, setIsConnected,
    setTickersData, setHiddenTicker, setTrackedTicker}) => {

    const isNotUndefined = value => value !== undefined;

    useEffect(() => {
        if (!isConnected && isNotUndefined(isConnected)) {
            const path = `http://localhost:${process.env.PORT || 4000}`;
            const socket = io(path);

            socket.on('connect', () => {
                setIsConnected(socket.connected);
                socket.on("ticker", data => {
                    setTickersData(data);
                });
            });
            socket.emit('start');
        }
    }, [isConnected, setIsConnected, setTickersData])

    const createTicker = (data) => {
        return <Ticker
            key={data.ticker}
            ticker={data.ticker}
            exchange={data.exchange}
            price={data.price}
            change={data.change}
            change_percent={data.change_percent}
            dividend={data.dividend}
            yield={data.yield}
            callbackOnClick={data.callbackOnClick}
            isHidden={data.isHidden} />;
    }

    const userTrackedTickersList = tickers.filter(t => !hiddenTickers.includes(t.ticker))
        .map(t => createTicker({...t, callbackOnClick: setHiddenTicker}));
    const userHiddenTickersList = hiddenTickers
        .map(t => createTicker({ticker: t, callbackOnClick: setTrackedTicker, isHidden: true}));


        const date = isNotUndefined(tickers[0]) ? new Date(tickers[0].last_trade_time)
            .toLocaleTimeString('en-US', {timeZone: 'Etc/GMT-4'}) : null;

    return isConnected ? <div className={s.wrapper}>
        <div className={s.tickersWrapper}>
            <div className={s.trackedTickersWrapper}>
                <TickerHeader
                    tickers={true}
                    exchange={true}
                    price={true}
                    change={true}
                    change_percent={true}
                    dividend={true}
                    yield={true} />
                {userTrackedTickersList}
            </div>
            {userHiddenTickersList.length > 0 && <div className={s.hiddenTickersWrapper}>
                <TickerHeader tickers={true} isHidden={true} />
                {userHiddenTickersList}
            </div>}
        </div>
        <div className={s.timeField}>Data was updated at {date}</div>
    </div>
    : <Preloader />;
}

const mapStateToProps = (state) => ({
    isConnected: getIsConnected(state),
    tickers: getTickers(state),
    hiddenTickers: getHiddenTickers(state)
});

export default connect(mapStateToProps, {setTickersData, setHiddenTicker, setTrackedTicker, setIsConnected})(TickerList);
