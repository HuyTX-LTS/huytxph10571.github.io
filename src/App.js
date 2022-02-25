import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import Radio from "./components/Radio";
import CheckBox from "./components/Checkbox";
import ToDoList from "./todo_list/ToDoList";
import Content from "./components/useEffect/Content";
import Timer from "./components/useEffect/Timer";
import ChooseImg from "./components/useEffect/ChooseImg";
import Comments from "./components/useEffect/Comments";
import TodoApp from "./components/useReducer/TodoApp";
import ContentContext from "./components/useContext/ContentContext";
import Home from "./pages/Home";
import News from "./pages/News";
import Context from "./pages/Context";

const gifts = [
  '3 củ',
  '6 củ',
  '9 củ',
];

function App() {
  const [gift, setGift] = React.useState();
  const [show, setShow] = React.useState(false);
  const [showTime, setShowTime] = React.useState(false);


  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length);
    setGift(gifts[index]);
  }

  return (
    <div
      className="App"
      style={{ padding: '50px' }}
    >
      {/* test useState */}
      <div>
        <h1>{gift || 'chưa lấy thưởng!!!'}</h1>
        <button
          onClick={() => randomGift()}
        >
          lấy thưởng
        </button>
      </div>
      <br></br>

      {/* radio */}
      <Radio />
      <br></br>

      {/* checkbox */}
      <CheckBox />

      {/* todo list */}
      <ToDoList />

      {/* useEffect */}
      <button
        style={show === true ? {
          color: '#fff',
          background: '#333'
        } : {}}
        onClick={() => {
          setShow(!show)
        }}
      >
        Show posts
      </button>
      {
        show && <Content />
      }
      <br></br>
      {/* timer */}
      <button
        style={showTime === true ? {
          color: '#fff',
          background: '#333'
        } : {}}
        onClick={() => {
          setShowTime(!showTime)
        }}
      >
        Show time
      </button>
      {
        showTime && <Timer />
      }
      <ChooseImg />
      {/* <Comments /> */}
      <TodoApp />
      <button>Toggle theme</button>
      <ContentContext />
      <h1>React router</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/context">Context</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/context" element={<Context />} />
      </Routes>
    </div>
  );
}

export default App;
