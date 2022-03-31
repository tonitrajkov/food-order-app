import React from 'react';

import {
    QuantityInputContainer
} from '../../../components/styles/style';

const QuantityInput = ({minValue, state, onChange}) => {
    let minval = +minValue;
    let value = +state.quantity;

    function increment() {
        value += 1;
        onChange(value);
    }

    function decrement() {
        if (value > minval) {
            value -= 1;
            onChange(value);
        }
    }

    return (
        <QuantityInputContainer>
            <span onClick={decrement} 
                className={state.quantity === minval ? 'disabled' : ''}>-</span>
            <span>{state.quantity}</span>
            <span onClick={increment}>+</span>
        </QuantityInputContainer>
    );
};

export default QuantityInput;