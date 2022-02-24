import React from "react";

export default function Radio() {
    const [checked, setChecked] = React.useState(1);

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
    return (
        <div className="radio">
            {
                courses.map((value) => {
                    return (
                        <div key={value.id}>
                            <label>
                                <input
                                    type={'radio'}
                                    checked={checked === value.id}
                                    onChange={() => setChecked(value.id)}
                                />
                                {value.name}
                            </label>
                        </div>
                    )
                })
            }
        </div>
    )
}