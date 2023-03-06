import React, { useState, useCallback } from 'react';
import './App.css';
import Form from './components/Form';
import Lists from './components/Lists';

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

  const handleClick = useCallback((id) => {
    let newTodoData = todoData.filter((data) => data.id !== id)
    setTodoData(newTodoData)
  }, [todoData])

  const handleRemoveClick = () => {
    setTodoData([])
  };

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
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>할일 목록</h1>
          <button onClick={handleRemoveClick}>Delete All</button>
        </div>

        <Lists
          todoData={todoData}
          setTodoData={setTodoData}
          handleClick={handleClick} />
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
