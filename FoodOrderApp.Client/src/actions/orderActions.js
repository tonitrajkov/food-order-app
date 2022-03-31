import axios from "axios";

import * as types from '../constants/actionTypes';

const apiUrl = 'https://localhost:44380/api/';


// sync actions
export const loadOrderSuccess = (order) => {
    return {
        type: types.LOAD_ORDER,
        payload: order
    }
};

export const addOrderItemSuccess = (order) => {
    return {
        type: types.ADD_ORDER_ITEM,
        payload: order
    }
};

export const removeOrderItemSuccess = (orderItem) => {
    return {
        type: types.REMOVE_ORDER_ITEM,
        payload: orderItem
    }
};


export const toggleOrderStatusMenu = () => {
    return {
        type: types.TOGGLE_ORDER_STATUS_MENU,
        payload: null
    }
};


// async actions
export const loadOrder = (userId, orderId) => {
    return (dispatch) => {
        return axios.get(`${apiUrl}food/order/${userId + "/" + orderId}`)
            .then(response => {
                dispatch(loadOrderSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const addOrderItem = (orderId, orderItem) => {
    let userId = localStorage.getItem('userIdentity');
    return (dispatch) => {
        return axios.post(`${apiUrl}food/order/item-create/${userId}/${orderId ?? ''}`, orderItem,
            {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                }
            })
            .then(response => {
                dispatch(addOrderItemSuccess(response.data));
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const removeOrderItem = (orderId, orderItem) => {
    let userId = localStorage.getItem('userIdentity');
    return (dispatch) => {
        return axios.delete(`${apiUrl}food/order/item-delete/${userId}/${orderItem.orderItemId}/${orderId}`,
            {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                }
            })
            .then(() => {
                dispatch(loadOrder(userId, orderId));
                // dispatch(removeOrderItemSuccess(orderItem));
            })
            .catch(error => {
                throw (error);
            });
    };
};