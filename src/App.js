import React, {Component} from 'react';
import './App.css';

export default class App extends Component {
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

  todoData = [
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
  ]

  render() {
    return(
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할일 목록</h1>
          </div>

          {this.todoData.map((data) => {
            return <div style={this.getStyle()} key="data.id">
              <input type="checkbox" defaultChecked={data.completed} />
              {data.title}
              <button style={this.btnStyle}>X</button>
            </div>
          })}
          
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
