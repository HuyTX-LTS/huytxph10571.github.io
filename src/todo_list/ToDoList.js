import React from "react";

function ToDoList() {
    // console.log(localStorage.getItem('ToDos'));

    const [toDoList, setToDoList] = React.useState(
        () => {
            const storageToDo = JSON.parse(localStorage.getItem('ToDos'));
            return storageToDo ?? [];
        }
    );
    const [todo, setToDo] = React.useState('');

    const handleSubmit = () => {
        setToDoList(prev => {
            const newToDo = [...prev, todo];

            //save to local storage
            const jsonToDo = JSON.stringify(newToDo);
            localStorage.setItem('ToDos', jsonToDo);

            return newToDo;
        });
        setToDo('');
    }

    const handleDelete = (value) => {
        const newList = toDoList.filter(item => item !== value);
        localStorage.setItem('ToDos', JSON.stringify(newList));
        setToDoList(newList);
    }

    return (
        <div className="todo">
            <input
                value={todo}
                type={'text'}
                onChange={e => setToDo(e.target.value)}
                placeholder="write todo"
            />
            <button
                onClick={() => { handleSubmit() }}
            >
                submit
            </button>
            <ul style={{ textDecoration: '' }}>
                {
                    toDoList.map((value, index) => {
                        return (
                            <li key={index}>
                                {value}
                                <span>
                                    <button
                                        onClick={() => handleDelete(value)}
                                    >
                                        delete
                                    </button>
                                </span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default ToDoList;