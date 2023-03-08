import React, { useState } from 'react'

const List = React.memo(({
  id,
  title,
  completed,
  todoData,
  setTodoData,
  provided,
  snapshot,
  handleClick
})  => {

  const [isEditing, setisEditing] = useState(false)
  const [editedTitle, seteditedTitle] = useState(title)

  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if(data.id === id) {
        data.completed = !data.completed
      }
      return data
    })
    setTodoData(newTodoData)
  }

  const handleEditChange = (event) => {
    seteditedTitle(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let newTodoData = todoData.map((data) => {
      if(data.id === id) {
        data.title = editedTitle
      }

      return data;
    })

    setTodoData(newTodoData)
    setisEditing(false)
  }

  if(isEditing) {
    return (
      <div
        className={`bg-gray-100 flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600  border rounded`}
      >
        <div className="items-center">
          <form onSubmit={handleSubmit}>
            <input
              value={editedTitle}
              onChange={handleEditChange}
              className="w-full px-3 py-2 mr-4 text-gray-500 rounded"
            />
          </form>
        </div>
        <div className="items-center">
          <button
            type="submit"
            className="px-4 py-2"
            onClick={handleSubmit}
          >save</button>
          <button
            className="px-4 py-2"
            onClick={() => setisEditing(false)}
          >X</button>
        </div>
      </div>
    );
  }
  else {
    return (
      <div
        key={id}
        {...provided.draggableProps}
        ref={provided.innerRef}
        {...provided.dragHandleProps}
        className={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"} flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600  border rounded`}
      >
        <div className="items-center">
          <input
            type="checkbox"
            defaultChecked={completed}
            onChange={() => handleCompleteChange(id)}
            className="mr-2"
          />
          <span className={completed ? "line-through" : undefined}>{title}</span>
        </div>
        <div className="items-center">
        <button
            className="px-4 py-2"
            onClick={() => setisEditing(true)}
          >edit</button>
          <button
            className="px-4 py-2"
            onClick={() => handleClick(id)}
          >X</button>
        </div>
      </div>
    );
  }
});

export default List;