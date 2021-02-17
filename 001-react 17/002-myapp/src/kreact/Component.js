
export default function Component(props){

    // console.log(this) new出来的实例对象classComponent：{}

    this.props = props;//将props挂载到此对象

}

Component.prototype.isReactComponent = {}