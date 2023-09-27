import { createSelector } from '@reduxjs/toolkit';
export const searchTextSelector = state => state.filters.search;

export const statusSelector = state => state.filters.status;

export const prioritySelector = state => state.filters.priority;

export const todoListSelector = state => state.todoList;

export const todoRemainingSelector = createSelector(
	todoListSelector,
	searchTextSelector,
	statusSelector,
	prioritySelector,
	(todoList, searchText, status, priorityList) => {
		let remainingTodoList = todoList.filter(todo => todo.name.includes(searchText));

		switch (status) {
			case 'Completed':
				remainingTodoList = remainingTodoList.filter(todo => todo.isCompleted);
				break;
			case 'Todo':
				remainingTodoList = remainingTodoList.filter(todo => !todo.isCompleted);
				break;
			default:
				break;
		}

		if (priorityList.length > 0) {
			remainingTodoList = remainingTodoList.filter(todo => priorityList.includes(todo.priority));
		}

		return remainingTodoList;
	}
);
