const initState = [];

const todoReducer = (state = initState, action) => {
	switch (action.type) {
		case 'todoList/addTodo':
			return [...state, action.payload];
		default:
			return state;
	}
};

export default todoReducer;
