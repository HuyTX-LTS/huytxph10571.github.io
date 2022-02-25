import React from "react";
import reducer, { initState } from "./Reducer";
import { setJob, addJob, deleteJob } from './Action'

function TodoApp() {
    const [state, dispath] = React.useReducer(reducer, initState);
    const { job, jobs } = state;
    const inputRef = React.useRef();

    const handleAdd = () => {
        dispath(addJob(job));
        dispath(setJob(""));

        inputRef.current.focus();
    }

    return (
        <div>
            <h3>Todo</h3>
            <input
                ref={inputRef}
                value={job}
                placeholder="Enter todo"
                onChange={(e) => {
                    dispath(setJob(e.target.value))
                }}
            />
            <button onClick={handleAdd}>Add</button>
            <ul>
                {
                    jobs.map((value, index) => {
                        return (
                            <li key={index}>
                                {value}
                                <span
                                    style={{cursor: 'pointer'}}
                                    onClick={() => { dispath(deleteJob(index)) }}
                                >
                                    xóa
                                </span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default TodoApp;