const initState = [];

const todoListReducer = (state = initState, action) => {
	switch (action.type) {
		case 'todoList/addTodo':
			return [...state, action.payload];
		case 'todoList/updateTodo': {
			const { id, updatedData } = action.payload;
			const newTodoList = state.map(todo => (todo.id === id ? updatedData : todo));
			return newTodoList;
		}
		default:
			return state;
	}
};

export default todoListReducer;
