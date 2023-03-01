import React, { useState } from 'react';
import './App.css';

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

  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
  }

  // 동적 스타일링을 위해 함수형 스타일선언
  const getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      // 조건부 삼항 연산자
      textDecoration: completed ? "line-through" : "none"
    }
  }

  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id)
    setTodoData(newTodoData)
  }

  const handleChange = (e) => {
    console.log('e', e.target.value);
    setValue(e.target.value)
  }

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

  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if(data.id === id) {
        data.completed = !data.completed
      }
      return data
    })
    setTodoData(newTodoData)
  }
  
  return(
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할일 목록</h1>
        </div>

        {todoData.map((data) => {
          return <div style={getStyle(data.completed)} key={data.id}>
            <input type="checkbox" defaultChecked={data.completed} onChange={() => handleCompleteChange(data.id)} />
            {data.title}
            <button style={btnStyle} onClick={() => handleClick(data.id)}>X</button>
          </div>
        })}

        <form style={{ display: 'flex'}} onSubmit={handleSubmit}>
          <input
            type="text"
            name="value"
            style={{flex: '10', padding:'5px' }}
            placeholder="해야 할 일을 입력하세요."
            value={value}
            onChange={handleChange}
          />
          <input
            type="submit"
            value="입력"
            className="btn"
            style={{ flex: 1 }}
          />
        </form>
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
