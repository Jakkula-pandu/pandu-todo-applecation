import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

import "./List.css";
const List = ({
	todoList,
	editTodo,
	handleChnage,
	removeTodo,
	
}) => {
	return (
		<section>
			{todoList.map(todo => {
				const { id, title } = todo;
				return (
					<ul className="todolist-container" key={id}>
						
						<li className={`todo-item ${todo.completed && 'completed'}`}>
							{title}
						</li>
						<li className="btn-container">
							<button
								className= "edit"
								disabled={todo.completed}
							>
								
							<FaEdit  onClick={() => editTodo(id)} />
								
							
							</button>
							<button className="delete-btn" onClick={() => removeTodo(id)}>
								<FaTrash className="icon" />
							</button>
						</li>
					</ul>
				);
			})}
		</section>
	);
};

export default List;