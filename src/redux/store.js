import { configureStore } from '@reduxjs/toolkit';
import filtersSlice from '../components/Filters/FilterSlice';
import todoListSlice from '../components/TodoList/TodoListSlice';

const store = configureStore({
	reducer: {
		filters: filtersSlice.reducer,
		todoList: todoListSlice.reducer
	}
});

export default store;
