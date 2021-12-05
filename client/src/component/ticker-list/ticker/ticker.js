import React from 'react';
import classNames from 'classnames';
import hideItemIcon from '../../../assets/icons/hide-item.png';
import showItemIcon from '../../../assets/icons/show-item.png';

import s from '../TickerList.module.css';

const Ticker = ({ticker, exchange, price, change, change_percent,
    dividend, yield : income, callbackOnClick, isHidden}) => {

    const isNotUndefined = value => value !== undefined;

    const isIncrease = change >= 0 && true;
    const changeStyle = isIncrease ? s.increase : s.decrease;

    const arrowUp = <svg width="16" height="16" viewBox="0 0 24 24" focusable="false">
        <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></svg>
    const arrowDown = <svg width="16" height="16" viewBox="0 0 24 24" focusable="false">
        <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg>

    const selectArrow = isIncrease ? arrowUp : arrowDown;

    return <div className={s.tickerWrapper}>
        <div className={classNames(s.tickerField, s.tickerWithButton, s.broadColumn)}>
            <div className={s.ticker}>{ticker}</div>
            {!isHidden ? <button className={s.tickerButton} type='button' onClick={() => callbackOnClick(ticker)}>
                <div className={s.itemIcon}>
                    <img src={hideItemIcon} alt='hide-item-icon' />
                </div>
            </button>
            : <button className={s.tickerButton} type='button' onClick={() => callbackOnClick(ticker)}>
                <div className={s.itemIcon}>
                    <img src={showItemIcon} alt='show-item-icon' />
                </div>
            </button>}
        </div>
        {isNotUndefined(exchange) && <div className={classNames(s.tickerField, s.exchange)}>{exchange}</div>}
        {isNotUndefined(price) && <div className={classNames(s.tickerField, s.price)}>{price}</div>}
        {isNotUndefined(change) && <div className={classNames(s.tickerField, s.change, changeStyle, s.broadColumn)}>
            {selectArrow}{change}</div>}
        {isNotUndefined(change_percent) && <div className={classNames(s.tickerField, s.change_percent, changeStyle, s.broadColumn)}>
            {selectArrow}{`${change_percent} %`}</div>}
        {isNotUndefined(dividend) && <div className={classNames(s.tickerField, s.dividend)}>{dividend}</div>}
        {isNotUndefined(income) && <div className={classNames(s.tickerField, s.income)}>{income}</div>}
    </div>
}

export default Ticker;
