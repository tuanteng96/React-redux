const initialState = {
    list: [],
    status: true
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const newTodoList = [...state.list];
            newTodoList.push(action.payload);
            return {
                ...state,
                list: newTodoList
            };
        default:
            return state;
    }
}
export default todoReducer;