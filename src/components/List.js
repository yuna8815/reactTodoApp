import React from 'react'

// List(props) => props.todoData
export default function List({ todoData, setTodoData }) {
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

  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if(data.id === id) {
        data.completed = !data.completed
      }
      return data
    })
    setTodoData(newTodoData)
  }

  return (
    <div>
      {todoData.map((data) => {
        return <div style={getStyle(data.completed)} key={data.id}>
          <input type="checkbox" defaultChecked={data.completed} onChange={() => handleCompleteChange(data.id)} />
          {data.title}
          <button style={btnStyle} onClick={() => handleClick(data.id)}>X</button>
        </div>
      })}
    </div>
  )
}