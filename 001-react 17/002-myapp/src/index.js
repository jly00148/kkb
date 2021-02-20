import React,{ Component } from 'react';
// import Component from './kreact/Component';

import ReactDOM from 'react-dom';
// import ReactDOM from './kreact/react-dom';


import './index.css';

//函数组件
// function FunctionComponent(props) {
//   return (
//     <div className="border">
//       <p>{props.name}</p>
//     </div>
//   )
// }

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


// Fragment
function FragmentComponent(){
  return(
      <>
        <li>Fragment1</li>
        <li>Fragment2</li>
      </>

      //React.Fragment写法和上面一样，支持写ke值，但是上面不支持写key值,为什么要传key值？
      //因为要做diff算法，判断这些节点能不能复用
      // <React.Fragment>
      //   <li>Fragment1</li>
      //   <li>Fragment2</li>
      // </React.Fragment>      
  )
}

const jsx = (
  <section className="border">
    <h1>开课吧</h1>
    <h1>全栈</h1>
    <a href="https://www.baidu.com/">kkb</a>
    {/* <FunctionComponent name="函数组件" /> */}
    <ClassComponent name="类组件" />
    <>
      <h1>h1</h1>
      <h2>h2</h2>
    </>
    <ul>
      <FragmentComponent />
    </ul>
  </section>
)

ReactDOM.render(jsx,document.getElementById('root'))

//不同节点渲染
//原生标签节点 div a等 document.createElement
//文本节点  document.createTextNode or node.textContent and node.nodeValue
//函数组件 执行函数的结果
//类组件  先实例化 再执行render函数
//Fragment直接遍历子节点