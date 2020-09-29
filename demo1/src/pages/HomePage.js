import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoList from './../components/Home/TodoList';
import { addNewTodo } from './../actions/todo';

function HomePage(props) {

    const [name, setName] = useState(''); 

    const todoList = useSelector(state => state.todo.list); //  Lấy Todo List từ Store
    //const todoStatus = useSelector(state => state.todo.status);
    const dispatch = useDispatch(); // Tạo dispatch
    
    const randomNumber = () => {
        return Math.floor(Math.random() * 100);
    }
    
    const addTodo = () => {
        // Todo News
        const id = randomNumber();
        const newTodo = {
            ID : id,
            Name: name
        }
        //Dispatch action add
        const action = addNewTodo(newTodo);
        dispatch(action);
        setName("");
    }

    const handleChangeName = (e) => {
        setName(e.target.value);
    }

    return (
        <div className="home-page">
            <h1>Home Page</h1>
            <input type="text" value={name} onChange={handleChangeName} placeholder="Nhập họ tên"/>
            <button type="button" onClick={addTodo}>Thêm mới</button>
            <TodoList todoList={todoList}></TodoList>
        </div>
    )
}

export default HomePage;