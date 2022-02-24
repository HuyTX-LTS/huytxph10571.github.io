import React from "react";

const lessions = [
    {
        id: 1,
        name: 'javascript'
    },
    {
        id: 2,
        name: 'ReacJs'
    },
    {
        id: 3,
        name: 'VueJs'
    }
]

function Comments() {
    const [lessionId, setLessionId] = React.useState(1);

    React.useEffect(() => {
        const handleComment = ({ detail }) => {
            console.log(detail);
        }
        window.addEventListener(`lesson-${lessionId}`, handleComment)

        return () => {window.removeEventListener(`lesson-${lessionId}`, handleComment)}

    }, [lessionId])

    return (
        <div>
            <ul>
                {
                    lessions.map(item => {
                        return (
                            <li
                                style={{
                                    color: lessionId === item.id ?
                                        'red' :
                                        '#333',
                                    cursor: 'pointer'
                                }}
                                onClick={() => setLessionId(item.id)}
                                key={item.id}
                            >
                                {item.name}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Comments;