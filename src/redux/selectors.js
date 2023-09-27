import { createSelector } from 'reselect';
const searchTextSelector = state => state.filters.search;

const statusSelector = state => state.filters.status;

const prioritySelector = state => state.filters.priority;

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
