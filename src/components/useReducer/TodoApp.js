import React from "react";

const initState = {
    job: '',
    jobs: [],
}

const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DELETE_JOB = 'delete_job';

const setJob = payload => {
    return ({
        type: SET_JOB,
        payload,
    })
}

const addJob = payload => {
    return ({
        type: ADD_JOB,
        payload,
    })
}

const deleteJob = payload => {
    return ({
        type: DELETE_JOB,
        payload,
    })
}

const reducer = (state, action) => {
    console.log("Ation", action);
    console.log("pre state", state);

    let newState;

    switch (action.type) {
        case SET_JOB:
            newState = {
                ...state,
                job: action.payload,
            }
            break;
        case ADD_JOB:
            newState = {
                ...state,
                jobs: [...state.jobs, action.payload],
            }
            break;
        case DELETE_JOB:
            const newJobs = [...state.jobs];
            newJobs.splice(action.payload, 1);

            newState = {
                ...state,
                jobs: newJobs,
            }
            break;

        default:
            throw new Error("invalid action");
    }

    console.log("new state", newState);

    return newState;
}

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