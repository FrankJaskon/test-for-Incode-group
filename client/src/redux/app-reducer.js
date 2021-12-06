import {round} from '../common/helper';

const SET_TICKERS_DATA = 'new-test/app/SET-TICKERS-DATA',
      SET_IS_CONNECTED = 'new-test/app/SET-IS-CONNECTED',
      SET_HIDDEN_TICKER = 'new-test/app/SET_HIDDEN_TICKER',
      SET_TRACKED_TICKER = 'new-test/app/SET_TRACKED_TICKER';

const initialState = {
    tickers: [],
    isConnected: false,
    hiddenTickers: []
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_CONNECTED:
            return {
                ...state,
                ...action.payload
            }
            case SET_TICKERS_DATA:
                if (state.tickers.length === 0) {
                    return {
                        ...state,
                        ...action.payload,
                    tickers: [...action.payload.tickers.map(item => ({
                        ...item,
                        change: 0,
                        change_percent: 0
                    }))]
                };
            }
            return {
                ...state,
                tickers: [...action.payload.tickers.map((item, num) => ({
                    ...item,
                    ...action.payload,
                    change: round((state.tickers[num].price - item.price), 2),
                    change_percent: round((state.tickers[num].price / item.price) * 100, 2)
                }))]
            }
            case SET_HIDDEN_TICKER:
                return {
                    ...state,
                    hiddenTickers: state.hiddenTickers.includes(action.payload.ticker)
                        ? [...state.hiddenTickers]
                        : [...state.hiddenTickers, action.payload.ticker]
                }
            case SET_TRACKED_TICKER:
                return {
                    ...state,
                    hiddenTickers: state.hiddenTickers.filter(ht => ht !== action.payload.ticker)
                }
        default:
            return state;
    }
}

export const setIsConnectedData = isConnected => ({type: SET_IS_CONNECTED, payload: {isConnected}});
export const setTickersData = tickers => ({type: SET_TICKERS_DATA, payload: {tickers}});
export const setHiddenTicker = ticker => ({type: SET_HIDDEN_TICKER, payload: {ticker}});
export const setTrackedTicker = ticker => ({type: SET_TRACKED_TICKER, payload: {ticker}});

export const setIsConnected = isConnected => dispatch => {
     setTimeout(() => {
        dispatch(setIsConnectedData(isConnected))
    }, 1000)
};

export default appReducer;

