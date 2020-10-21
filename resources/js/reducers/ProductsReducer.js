import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR
} from '../actions/ProductsActions'

const initialState = {
    error: null,
    isLoading: false,
    count: 2,
    list: [
        {
            'name': 'test pizza 1',
            'slug': 'pizza1',
            'price': 100.0,
            'currency': 'usd',
            'image': 'https://yamiyami.ru/photo/product/C0408D42-266A-0643-8AA7-2CB0BAD4D004/1168x584.jpg?v=1.1.1',
            'priority': 1,
            'description': 'test description 1'
        },
        {
            'name': 'test pizza 2',
            'slug': 'pizza2',
            'price': 200.0,
            'currency': 'usd',
            'image': 'https://yamiyami.ru/photo/product/0C4F3CD5-DD76-5C4E-9E78-D58284EE8064/1168x584.jpg?v=1.1.1',
            'priority': 1,
            'description': 'test description 1'
        }
    ],
}

export function productsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS_REQUEST:
            return {...state, isLoading: true};

        case GET_PRODUCTS_SUCCESS:
            return {...state, list: action.payload, isLoading: false};

        case GET_PRODUCTS_ERROR:
            return {...state, error: action.payload, isLoading: false};

        default:
            return state
    }
}
