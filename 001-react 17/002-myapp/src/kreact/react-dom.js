//vnode 虚拟dom节点
//node 真实dom节点

function render(vnode, container){
    //虚拟dom生成真实dom
    // step1: vnode ->node
    const node = createNode(vnode);

    //step2:将真实dom节点插入到父节点中
    container.appendChild(node);
}

    //根据虚拟dom节点生成真实dom节点
    function createNode(vnode){


        let node;
        const {type} = vnode; //type: section h1

        //todo 根据虚拟dom节点，生成真实的dom节点
        if(typeof type === 'string'){
            
            //原生标签节点
            node = updateHostComponent(vnode);


        }else if(isStringOrNumber(vnode)){// type是undefined ,vnode是字符创或者数值
            //文本标签节点
            node = updateTextComponent(vnode)
        }else if(typeof type === 'function'){//函数组件
            node = type.prototype.isReactComponent ? 
            updateClassComponent(vnode): 
            updateFunctionComponent(vnode)
        }

        return node;//node: <section></section>
    }

    //添加属性
    function updateNode(node,nextVal){
        Object.keys(nextVal)
        .filter(k=>k !=='children')
        .forEach(k=>{
            node[k] = nextVal[k]
        })
    }

    //原生标签节点 div ，a
    function updateHostComponent(vnode){
        const {type,props} = vnode;
        const node = document.createElement(type);
        updateNode(node,props)

        reconcileChildren(node,props.children)
        return node;
        
    }

    function isStringOrNumber(sth) {    
        return typeof sth === 'string' || typeof sth ==='number';
    }

    function updateTextComponent(vnode) {
        const node = document.createTextNode(vnode)
        return node ;
    }

    function updateFunctionComponent(vnode){//函数组件处理函数
        const {type,props} = vnode;
        
        //child 即：return 函数组件返回的虚拟dom节点，子节点为p标签
        const child = type(props); 

        //vnode->node

        const node = createNode(child);
        return node;
    }

    function updateClassComponent(vnode){
        const {type,props} = vnode;

        const instance = new type(props)
        const child = instance.render()// child 是 类组件返回的虚拟dom节点

        //vnode->node
        const node = createNode(child)
        return node;
    }


    function reconcileChildren(parentNode,children){
        const newChildren = Array.isArray(children) ?children : [children]

        for(let i = 0;i<newChildren.length;i++){
            let child = newChildren[i];
            // vnode -> node 再把node插入到parentNode中 调用render函数
            render(child,parentNode)
            
        }
    }
    
export default {render}