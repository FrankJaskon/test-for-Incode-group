import React from 'react';
import classNames from 'classnames';

import s from '../TickerList.module.css';

const TickerHeader = ({tickers, exchange, price, change, change_percent,
    dividend, yield : income, last_trade_time, isHidden}) => {

    const isNotUndefined = value => value !== undefined;

    const namesArray = [
        tickers && isHidden ? 'hidden tickers' : 'tickers', exchange && 'exchange', price && 'price',
        change && 'change', change_percent && 'change (%)',
        dividend && 'dividend', income && 'income', last_trade_time && 'date'
    ];

    const broadColumn = string => {
        if (string === 'change' || string === 'tickers' || string === 'change (%)') {
            return s.broadColumn;
        }
    };

    const titleItems = namesArray.map(name => isNotUndefined(name)
        && <div key={name} className={classNames(s.tickerField, broadColumn(name))}>{name}</div>);

    return <div className={s.tickerHeader}>
        {titleItems}
    </div>
}

export default TickerHeader;
