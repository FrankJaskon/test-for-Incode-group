import {round, ceil} from './helper';

it.only('should round floats to 2 places up', function() {

    const cases = [
      { n: 10,      e: 10,    p:2 },
      { n: 1.7777,  e: 1.78,  p:2 },
      { n: 1.005,   e: 1.01,  p:2 },
      { n: 1.005,   e: 1,     p:0 },
      { n: 1.77777, e: 1.8,   p:1 }
    ]

    cases.forEach(({n, e, p}) => {
        expect(ceil(n, p)).toEqual(e);
    });
});

test('should round floats to 2 places', () => {

    const cases = [
        { n: 10,      e: 10,    p:2 },
        { n: 1.7777,  e: 1.78,  p:2 },
        { n: 1.005,   e: 1.01,  p:2 },
        { n: 1.005,   e: 1,     p:0 },
        { n: 1.77777, e: 1.8,   p:1 }
    ]

    cases.forEach(({n, e, p}) => {
        expect(round(n, p)).toEqual(e);
    });
});