var box = document.querySelector('.box')

var banner = document.querySelector('.banner')

function fn(e){
    let boxWidth = box.getBoundingClientRect().width
    let boxHeight = box.getBoundingClientRect().height
    // console.log(boxWidth,boxHeight)
    // 取监听容器的高宽
    let xDiff = e.clientX - (box.offsetLeft + boxWidth / 2)  
    let yDiff = e.clientY - (box.offsetTop + boxHeight / 2) 
    // 获取鼠标至中心的距离差值，中心点左上方为负，右下为正
    let xPercent = xDiff / (boxWidth/2)
    let yPercent = yDiff / (boxHeight/2)

    // 换成百分比
    let xDeg = xPercent * 5
    let yDeg = yPercent * 3
    // 角度
    
    banner.style.transform = `translateZ(-50px) rotateX(${-yDeg}deg) rotateY(${xDeg}deg)`

}
box.addEventListener('mousemove', fn)