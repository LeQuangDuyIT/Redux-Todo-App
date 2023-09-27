// const initState = [];

// const todoListReducer = (state = initState, action) => {
// 	switch (action.type) {
// 		case 'todoList/addTodo':
// 			return [...state, action.payload];
// 		case 'todoList/updateTodo': {
// 			const { id, updatedData } = action.payload;
// 			const newTodoList = state.map(todo => (todo.id === id ? updatedData : todo));
// 			return newTodoList;
// 		}
// 		default:
// 			return state;
// 	}
// };

// export default todoListReducer;

import { createSlice } from '@reduxjs/toolkit';

const todoListSlice = createSlice({
	name: 'todoList',
	initialState: [],
	reducers: {
		addTodo: (state, action) => {
			state.push(action.payload);
		},
		updateTodo: (state, action) => {
			const { id, updatedTodo } = action.payload;
			const index = state.findIndex(todo => todo.id === id);
			if (index === -1) return;
			state.splice(index, 1, updatedTodo);
		}
	}
});

export default todoListSlice;
