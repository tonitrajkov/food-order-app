import * as types from '../constants/actionTypes';

const initState = {
    order: null,
    items: [],
    isOrderMenuOpen: false
};

export const orderReducer = (state = initState, action) => {
    switch (action.type) {
        case types.LOAD_ORDER:
            return {
                ...state,
                order: action.payload,
                items: [...state.items, action.payload?.orderItems]
            };
        case types.ADD_ORDER_ITEM:
            // localStorage.setItem('orderId', action.payload.orderId);
            // localStorage.setItem('orderId', 1);

            return {
                ...state,
                order: action.payload,
                items: [...state.items, action.payload?.orderItems]
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