import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: ['test', 'testando', 'zustant'],
    reducers: {},
})

export const store = configureStore({
    reducer:{
        todo: todoSlice.reducer,
    }
})