var wrapper = document.querySelector('.wrapper')
console.log(wrapper)
var eye = document.querySelector('.eye')


function fn(e){
    let Width = wrapper.getBoundingClientRect().width
    let Height = wrapper.getBoundingClientRect().height
    // console.log(boxWidth,boxHeight)
    // 取监听容器的高宽
    let xDiff = e.clientX - (wrapper.offsetLeft + Width / 2)  
    let yDiff = e.clientY - (wrapper.offsetTop + Height / 2) 
    // 获取鼠标至中心的距离差值，中心点左上方为负，右下为正
    let xPercent = xDiff / (Width/2)
    let yPercent = yDiff / (Height/2)

    // 换成百分比
    let xDeg = xPercent * 20 
    let yDeg = yPercent * 20
    // 角度
    
    eye.style.transform = `rotate(-45deg) rotateX(${-yDeg}deg) rotateY(${xDeg}deg)`

}
wrapper.addEventListener('mousemove', fn)