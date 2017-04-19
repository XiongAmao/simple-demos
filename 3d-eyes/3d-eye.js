var wrapper = document.querySelector('.wrapper')
var eye = document.querySelector('.eye')


function fn(e) {
    let Width = wrapper.getBoundingClientRect().width
    let Height = wrapper.getBoundingClientRect().height
    // console.log(boxWidth,boxHeight)
    // 取监听容器的高宽
    rotateDeg = -45
    let Radian = 2 * Math.PI / 360 * rotateDeg
    let xClient = e.clientX
    let yClient = e.clientY
    let xDiff = xClient - (wrapper.offsetLeft + Width / 2)
    let yDiff = yClient - (wrapper.offsetTop + Height / 2)
    // 获取鼠标至中心的距离差值，中心点左上方为负，右下为正
    
    let yRotation = xDiff*Math.cos(Radian) - yDiff*Math.sin(Radian)
    let XRotation = -xDiff*Math.sin(Radian) - yDiff*Math.cos(Radian)
    
    let xPercent = XRotation / (Width / 2)
    let yPercent = yRotation / (Height / 2)

    // 换成百分比
    let xDeg = xPercent * 30
    let yDeg = yPercent * 15
    // 角度


    // if(){    }
    eye.style.transform = `rotate(${rotateDeg}deg) rotateX(${-yDeg}deg) rotateY(${xDeg}deg)`

}
wrapper.addEventListener('mousemove', fn)