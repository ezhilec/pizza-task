const initialState = {
    list: [
        {
            name: 'Dollar',
            slug: 'usd',
            is_default: true
        },
        {
            name: 'Euro',
            slug: 'eur',
            is_default: false,
            rate: 1.17
        }
    ],
}

export function currencyReducer(state = initialState) {
    return state
}
