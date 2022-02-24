import React from "react";

const tabs = ['posts', 'comments', 'albums', 'users'];

function Content() {
    const [posts, setPosts] = React.useState([]);
    const [type, setType] = React.useState('posts');
    const [showGoToTop, setShowGoToTop] = React.useState(false);

    React.useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(resp => resp.json())
            .then(posts => {
                setPosts(posts);
            })
    }, [type])

    React.useEffect(() => {
        const handleScroll = () => {
            setShowGoToTop(window.scrollY);
        }

        window.addEventListener('scroll', handleScroll)

        // remove event listen scroll (cleanup function)
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])
    // console.log(posts, show);
    return (
        <div className="content-">
            {
                <div>
                    {
                        tabs.map((item) => {
                            return (
                                <button
                                    onClick={() => setType(item)}
                                    style={type === item ? {
                                        color: '#fff',
                                        background: '#333'
                                    } : {}}
                                    key={item}
                                >
                                    {item}
                                </button>
                            )
                        })
                    }
                    <ul>
                        {
                            // console.log('hello'),
                            posts.map((item) => {
                                return (
                                    <li key={item.id}>{item.name || item.title}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            }
            {
                showGoToTop &&
                <button
                    style={{
                        position: 'fixed',
                        right: '20px',
                        bottom: '20px',
                    }}
                >
                    go to top
                </button>
            }
        </div>
    );
}

export default Content;