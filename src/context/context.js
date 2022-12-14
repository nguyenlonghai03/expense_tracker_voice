import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{ "amount": 100, "category": "Salary", "type": "Income", "date": "2022-11-14", "id": "6389c3c1-a5bb-43be-b48f-30a3ed4b972c" }];

export const ExpenseTrackerContext = createContext(initialState);
export const Provider = ({ children }) => {

    const [transactions, dispatch] = useReducer(contextReducer, initialState);
    //Action creators
    const deleteTransaction = (id) => {
        dispatch({ type: 'DELETE_TRANSACTION', payload: id });
    }

    const addTransaction = (transaction) => {
        dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
    }

    const balance = transactions.reduce((acc, currVal) => currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount, 0)

    return (
        <ExpenseTrackerContext.Provider value={{ deleteTransaction, addTransaction, transactions, balance }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}