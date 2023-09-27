export const addTodo = data => {
	return {
		type: 'todoList/addTodo',
		payload: data
	};
};

export const updateTodo = (id, updatedData) => {
	return {
		type: 'todoList/updateTodo',
		payload: { id, updatedData }
	};
};

export const searchFilterChange = text => {
	return {
		type: 'filters/searchFilterChange',
		payload: text
	};
};

export const statusFilterChange = status => {
	return {
		type: 'filters/statusFilterChange',
		payload: status
	};
};

export const priorityFilterChange = priorityList => {
	return {
		type: 'filters/priorityFilterChange',
		payload: priorityList
	};
};
