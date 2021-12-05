
export const round = (number, decimals) => +(Math.round(number + "e+" + decimals) + "e-" + decimals);

export const ceil = (number, decimals) => +(Math.ceil(number + "e+" + decimals) + "e-" + decimals);