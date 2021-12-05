import appReducer from '../redux/app-reducer';

const initialState = {
    app: {
        tickers: [],
        isConnected: false,
        hiddenTickers: []
    }
};

test('should return the initial state', () => {
    expect(appReducer(initialState, {})).toEqual(initialState)
});

test('tickers array should consist of one item with testing data', () => {

    let state;

    state = appReducer(initialState, {
        type: 'new-test/app/SET-TICKERS-DATA',
        payload: {
            tickers: [{
                ticker: 'AAPL',
                exchange: 'NASDAQ',
                price: '203.04',
                change: '45.23',
                change_percent: '0.51',
                dividend: '0.24',
                yield: '0.00',
                last_trade_time: '2021-12-05T13:59:41.000Z'
            }]
        }
    });
    expect(state).toEqual({
        app: {
            tickers: [{
                ticker: 'AAPL',
                exchange: 'NASDAQ',
                price: '203.04',
                change: '45.23',
                change_percent: '0.51',
                dividend: '0.24',
                yield: '0.00',
                last_trade_time: '2021-12-05T13:59:41.000Z'
            }],
            isConnected: false,
            hiddenTickers: []
        }
    });
});

// test('isConnected should be true', () => {

//     let state;

//     state = appReducer(initialState,
//         {
//         type: 'new-test/app/SET-IS-CONNECTED',
//         payload: {
//             isConnected: true
//         }
//     });
//     expect(state).toEqual({app: {isConnected: true}});
// });

// test('hiddenTickers array should consist of one item with name AAPL', () => {

//     let state;

//     state = appReducer(initialState, {
//         type: 'new-test/app/SET_HIDDEN_TICKER',
//         payload: {
//             ticker: 'AAPL'
//         }
//     });
//     expect(state).toEqual({app: {hiddenTickers: ['AAPL']}});
// });