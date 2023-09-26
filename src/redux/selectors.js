import { createSelector } from 'reselect';

export const todoListSelector = state => state.todoList;

export const searchTextSelector = state => state.filters.search;

export const todoRemainingSelector = createSelector(
	todoListSelector,
	searchTextSelector,
	(todoList, searchText) => {
		const remainingTodoList = todoList.filter(todo => todo.name.includes(searchText));
		return remainingTodoList;
	}
);
