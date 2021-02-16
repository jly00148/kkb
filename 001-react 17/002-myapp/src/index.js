import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
// import ReactDOM from './kreact/react-dom';
import './index.css';

//函数组件
function FunctionComponent(props) {
  return (
    <div className="border">
      <p>{props.name}</p>
    </div>
  )
}

//类组件 继承Component中的setState props等，否则拿不到
class ClassComponent extends Component{
  render(){
    return (
      <div className="border">
      <p>{this.props.name}</p>
    </div>
    )
  }
}

const jsx = (
  <section className="border">
    <h1>开课吧</h1>
    <h1>全栈</h1>
    <a href="https://www.baidu.com/">kkb</a>
    <FunctionComponent name="函数组件" />
    <ClassComponent name="类组件" />
  </section>
)

ReactDOM.render(jsx,document.getElementById('root'))