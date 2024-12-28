import { ADD, SUB } from './ActionType';

export const addToCounter = (value) => ({
    type: ADD,
    payload: value,
});

export const subToCounter = (value) => ({
    type: SUB,
    payload: value,
});
