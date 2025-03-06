function customRender(reactEle,container){
    // const domElement=document.createElement
    // (reactEle.type)
    // domElement.innerHTML=reactEle.children
    // domElement.setAttribute('href',reactEle.props.href)
    // domElement.setAttribute('target',reactEle.props.target)

    // container.appendChild(domElement)

    const domElement=document.createElement(reactEle.type)
    domElement.innerHTML=reactEle.children
    for(const prop in reactEle.props){
        if(prop==='children') continue;
        domElement.setAttribute(prop,reactEle.props[prop])
    }

    container.appendChild(domElement)

}

const reactEle = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
}

// const anotherEle = (
//     <a href="https://google.com" target='_blank'>Visit Google</a>
// )

const root=document.querySelector('#root')
// ReactDOM.createRoot(document.getElementById('root')).
// render(
//     <anotherEle />
// )

customRender(reactEle,root)