export const convertCurrency = (price, currencies, currencyFrom, currencyTo) => {

    if (!price ||
        !currencies ||
        !currencyFrom ||
        !currencyTo
    ) {
        return null;
    }
    const rateFrom = currencies.find(item => item.slug === currencyFrom).rate || 1;
    const rateTo = currencies.find(item => item.slug === currencyTo).rate || 1;

    const resultPrice = parseFloat(price * (rateFrom / rateTo))
                        .toFixed(2);

    return +resultPrice;
}
