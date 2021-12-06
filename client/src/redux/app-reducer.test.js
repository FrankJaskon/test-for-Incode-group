import reducer, {setHiddenTicker, setIsConnectedData, setTickersData, setTrackedTicker} from '../redux/app-reducer';

const initialState = {
    tickers: [],
    isConnected: false,
    hiddenTickers: []
}

let state = {};

describe('app-reducer testing', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            tickers: [],
            isConnected: false,
            hiddenTickers: []
        });
    });
});


it('tickers array should consist of one item with testing data', () => {
    state = reducer(initialState, setTickersData([{
                ticker: 'AAPL',
                exchange: 'NASDAQ',
                price: '130.19',
                change: 0,
                change_percent: 0,
                dividend: '0.17',
                yield: '1.05',
                last_trade_time: '2021-12-06T04:56:15.000Z'
            }]));
    expect(state).toEqual({
        tickers: [{
            ticker: 'AAPL',
            exchange: 'NASDAQ',
            price: '130.19',
            change: 0,
            change_percent: 0,
            dividend: '0.17',
            yield: '1.05',
            last_trade_time: '2021-12-06T04:56:15.000Z'
        }],
        isConnected: false,
        hiddenTickers: []
    });
});

it('isConnected should be true', () => {
    state = reducer(initialState, setIsConnectedData(true));
    expect(state.isConnected).toEqual(true);
});

it('hiddenTickers array should consist of one item with name AAPL', () => {
    state = reducer(initialState, setHiddenTicker('AAPL'));
    expect(state.hiddenTickers).toEqual(['AAPL']);
});

it('hiddenTickers array should be empty array', () => {
    state = reducer(initialState, setTrackedTicker('AAPL'));
    expect(state.hiddenTickers).toEqual([]);
});