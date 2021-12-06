
export const round = (number, decimals) => +(Math.round(number + "e+" + decimals) + "e-" + decimals);