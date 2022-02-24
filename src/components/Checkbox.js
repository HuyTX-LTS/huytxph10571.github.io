import React from "react";

export default function CheckBox() {
    const [checked, setChecked] = React.useState([]);

    const courses = [
        {
            id: 1,
            name: 'js'
        },
        {
            id: 2,
            name: 'java'
        },
        {
            id: 3,
            name: 'vuejs'
        },
    ];

    // console.log(checked);

    const handleChecked = (id) => {
        setChecked((prev) => {
            const isChecked = checked.includes(id);
            if (isChecked) {
                return checked.filter(item => item !== id)
            } else {
                return [...prev, id]
            }
        })
    }

    // const handleSubmit = () => {
    //     console.log({
    //         ids: checked
    //     });
    // }

    return (
        <div className="radio">
            {
                courses.map((value) => {
                    return (
                        <div key={value.id}>
                            <label>
                                <input
                                    type={'checkbox'}
                                    checked={checked.includes(value.id)}
                                    onChange={() => handleChecked(value.id)}
                                />
                                {value.name}
                            </label>
                        </div>
                    )
                })
            }
            {/* <button
                onClick={() => { handleSubmit() }}
            >submit</button> */}
        </div>
    )
}