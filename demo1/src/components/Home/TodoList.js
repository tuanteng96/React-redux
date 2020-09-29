import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todoList: PropTypes.array
}
//Default props
TodoList.defaultProps = {
    todoList : []
}

function TodoList(props) {
    const {todoList} = props;
    return (
        <ul>
            {
                todoList && todoList.map((todo,index) => (
                    <li key={index}>{todo.Name} + (ID : {todo.ID})</li>
                ))
            }
        </ul>
    )
}
export default TodoList;