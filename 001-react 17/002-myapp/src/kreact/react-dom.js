//vnode 虚拟dom节点
//node 真实dom节点

function render(vnode, container){

    // console.log(vnode)


    //虚拟dom生成真实dom
    // step1: vnode ->node
    const node = createNode(vnode);

    //step2:
    container.appendChild(node);
}

    function isStringOrNumber(sth) {    
        return typeof sth === 'string' || typeof sth ==='number';
      }

    //根据虚拟dom节点生成真实dom节点
    function createNode(vnode){
        let node;
        const {type} = vnode; //type: section

        //todo 根据虚拟dom节点，生成真实的dom节点
        if(typeof type === 'string'){
            //原生标签节点
            node = updateHostComponent(vnode);
            
        }else if(isStringOrNumber(vnode)){
            //文本标签节点
            node = updateTextComponent(vnode)
        }

        return node;//node: <section></section>
    }


    //原生标签节点 div ，a
    function updateHostComponent(vnode){
        const {type,props} = vnode;
        const node = document.createElement(type);

        reconcileChildren(node,props.children)
        return node;
        
    }

    function updateTextComponent(vnode) {
        const node = document.createTextNode(vnode)
        return node ;
    }

    function reconcileChildren(parentNode,children){
        // console.log(children) 子节点
        const newChildren = Array.isArray(children) ?children : [children]

        for(let i = 0;i<newChildren.length;i++){
            let child = newChildren[i];
            // vnode -> node 再把node插入到parentNode中 调用render函数
            render(child,parentNode)
            
        }
    }
    






export default {render}