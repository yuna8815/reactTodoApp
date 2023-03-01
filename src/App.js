import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';

export default function App() {
  const [todoData, setTodoData] = useState([{
    id: "1",
    title: "공부하기",
    completed: true
  },
  {
    id: "2",
    title: "청소하기",
    completed: false
  }])
  const [value, setValue] = useState("")

  const handleSubmit = (e) => {
    // 페이지의 리로드를 방지
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false
    }

    setTodoData((prev) => [...prev, newTodo])
    setValue('')
  }
  
  return(
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할일 목록</h1>
        </div>

        <List todoData={todoData} setTodoData={setTodoData} />
        <Form value={value} setValue={setValue} handleSubmit={handleSubmit} />
      </div>
    </div>
  )
}

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div>
      
//     </div>
//   );
// }

// export default App;
