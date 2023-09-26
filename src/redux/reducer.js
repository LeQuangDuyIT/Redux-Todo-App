const initState = {
	filter: {
		search: '',
		status: 'All',
		priority: []
	},
	todoList: []
};

const rootReducer = (state = initState, action) => {
	switch (action.type) {
		case 'todoList/addTodo':
			return {
				...state,
				todoList: [...state.todoList, action.payload]
			};
		case 'filters/searchFilterChange':
			return {
				...state,
				filter: {
					...state.filter,
					search: action.payload
				}
			};
		default:
			return state;
	}
};

export default rootReducer;
