import * as types from '../constants/actionTypes';

const initState = {
    order: null,
    orders: {
        orderId: 1,
        orderNumber: '891283989318',
        orderDate: new Date(),
        orderStatus: 1,
        totalPrice: 38.6,
        orderItems: [
            {
                orderItemId: 1,
                note: '',
                quantity: 1,
                totalPrice: 8.5,
                product: {
                    productId: 1,
                    name: 'Product name',
                    ingredinent: 'test, test, test',
                    price: 7.5,
                    size: '',
                    image: '',
                    category: {
                        categoryId: 1,
                        name: 'Pizza'
                    }
                },
                ingredients: [{
                    ingredientId: 1,
                    name: 'test 1',
                    price: 0.5
                },
                {
                    ingredientId: 2,
                    name: 'test 2',
                    price: 0.5
                }]
            },
            {
                orderItemId: 2,
                note: '',
                quantity: 2,
                totalPrice: 18.10,
                product: {
                    productId: 2,
                    name: 'Quatroformaggi toast',
                    ingredinent: 'test, test, test',
                    price: 8.5,
                    size: '',
                    image: '',
                    category: {
                        categoryId: 2,
                        name: 'Sandwiches'
                    }
                },
                ingredients: [{
                    ingredientId: 1,
                    name: 'test 1',
                    price: 0.5
                },
                {
                    ingredientId: 2,
                    name: 'test 2',
                    price: 0.5
                }]
            },
            {
                orderItemId: 3,
                note: '',
                quantity: 3,
                totalPrice: 12,
                product: {
                    productId: 5,
                    name: 'Margarita',
                    ingredinent: 'test, test, test',
                    price: 4,
                    size: '',
                    image: '',
                    category: {
                        categoryId: 1,
                        name: 'Pizza'
                    }
                },
                ingredients: []
            },
            {
                orderItemId: 12,
                note: '',
                quantity: 1,
                totalPrice: 8.5,
                product: {
                    productId: 1,
                    name: 'Product name',
                    ingredinent: 'test, test, test',
                    price: 7.5,
                    size: '',
                    image: '',
                    category: {
                        categoryId: 1,
                        name: 'Pizza'
                    }
                },
                ingredients: [{
                    ingredientId: 1,
                    name: 'test 1',
                    price: 0.5
                },
                {
                    ingredientId: 2,
                    name: 'test 2',
                    price: 0.5
                }]
            },
            {
                orderItemId: 22,
                note: 'daksoda doak daok daok daok dasokkkoksaodko dask doask dsaok daok odka',
                quantity: 2,
                totalPrice: 18.10,
                product: {
                    productId: 2,
                    name: 'Quatroformaggi toast',
                    ingredinent: 'test, test, test',
                    price: 8.5,
                    size: '',
                    image: '',
                    category: {
                        categoryId: 2,
                        name: 'Sandwiches'
                    }
                },
                ingredients: [{
                    ingredientId: 1,
                    name: 'test 1',
                    price: 0.5
                },
                {
                    ingredientId: 2,
                    name: 'test 2',
                    price: 0.5
                }]
            },
            {
                orderItemId: 32,
                note: '',
                quantity: 3,
                totalPrice: 12,
                product: {
                    productId: 5,
                    name: 'Margarita',
                    ingredinent: 'test, test, test',
                    price: 4,
                    size: '',
                    image: '',
                    category: {
                        categoryId: 1,
                        name: 'Pizza'
                    }
                },
                ingredients: []
            },
            {
                orderItemId: 11,
                note: '',
                quantity: 1,
                totalPrice: 8.5,
                product: {
                    productId: 1,
                    name: 'Product name name nema nakoda mekoam dakoda dako',
                    ingredinent: 'test, test, test',
                    price: 7.5,
                    size: '',
                    image: '',
                    category: {
                        categoryId: 1,
                        name: 'Pizza'
                    }
                },
                ingredients: [{
                    ingredientId: 1,
                    name: 'test 1',
                    price: 0.5
                },
                {
                    ingredientId: 2,
                    name: 'test 2',
                    price: 0.5
                }]
            },
            {
                orderItemId: 12,
                note: 'extra spicy',
                quantity: 2,
                totalPrice: 18.10,
                product: {
                    productId: 2,
                    name: 'Quatroformaggi toast',
                    ingredinent: 'test, test, test',
                    price: 8.5,
                    size: '',
                    image: '',
                    category: {
                        categoryId: 2,
                        name: 'Sandwiches'
                    }
                },
                ingredients: [{
                    ingredientId: 1,
                    name: 'test 1',
                    price: 0.5
                },
                {
                    ingredientId: 2,
                    name: 'test 2',
                    price: 0.5
                }]
            },
            {
                orderItemId: 13,
                note: 'eftino',
                quantity: 3,
                totalPrice: 12,
                product: {
                    productId: 5,
                    name: 'Margarita',
                    ingredinent: 'test, test, test',
                    price: 4,
                    size: '',
                    image: '',
                    category: {
                        categoryId: 1,
                        name: 'Pizza'
                    }
                },
                ingredients: []
            }
        ]
    },
    items: [],
    isOrderMenuOpen: true
};

export const orderReducer = (state = initState, action) => {
    switch (action.type) {
        case types.LOAD_ORDER:
            return {
                ...state,
                order: action.payload,
                items: [...state.items, action.payload.orderItems]
            };
        case types.ADD_ORDER_ITEM:
            localStorage.setItem('orderId', action.payload.orderId);

            return {
                ...state,
                order: action.payload,
                items: [...state.items, action.payload.orderItems]
            };
        case types.TOGGLE_ORDER_STATUS_MENU:
            return {
                ...state,
                isOrderMenuOpen: !state.isOrderMenuOpen
            };
        // case types.REMOVE_ORDER_ITEM:
        //     let updatedOrder = JSON.parse(JSON.stringify(state.order));
        //     updatedOrder.orderItems = state.order.orderItems.filter(item => {
        //         return item.orderItemId !== action.payload.orderItemId
        //     });
        //     return {
        //         ...state,
        //         order: updatedOrder
        //     };
        default:
            return state;
    }
};

export default orderReducer;