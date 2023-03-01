import React, {Component} from 'react';
import './App.css';

export default class App extends Component {
  state = {
    todoData: [
      {
        id: "1",
        title: "공부하기",
        completed: true
      },
      {
        id: "2",
        title: "청소하기",
        completed: false
      },
    ],
    value: ''
  }
  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
  }

  // 동적 스타일링을 위해 함수형 스타일선언
  getStyle = () => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: "none"
    }
  }

  handleClick = (id) => {
    let newTodoData = this.state.todoData.filter((data) => data.id !== id)
    this.setState({todoData: newTodoData})
  }

  handleChange = (e) => {
    console.log('e', e.target.value);
    this.setState({ value: e.target.value })
  }

  handleSubmit = (e) => {
    // 페이지의 리로드를 방지
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: this.state.value,
      completed: false
    }

    this.setState({
      todoData: [...this.state.todoData, newTodo],
      value: ''
    })
  }

  render() {
    return(
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할일 목록</h1>
          </div>

          {this.state.todoData.map((data) => {
            return <div style={this.getStyle()} key={data.id}>
              <input type="checkbox" defaultChecked={data.completed} />
              {data.title}
              <button style={this.btnStyle} onClick={() => this.handleClick(data.id)}>X</button>
            </div>
          })}

          <form style={{ display: 'flex'}} onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="value"
              style={{flex: '10', padding:'5px' }}
              placeholder="해야 할 일을 입력하세요."
              value={this.state.value}
              onChange={this.handleChange}
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
