function step() {
  var now = new Date()
  
  var hours = now.getHours()
  var minutes = now.getMinutes()
  var seconds = now.getSeconds()

/*  if (hours > 12) {
    hours -= 12
  }
*/
  hours %= 12

  var secondDeg = seconds / 60 * 360
  var minuteDeg = (minutes * 60 + seconds) / 3600 * 360
  var hourDeg = (hours * 3600 + minutes * 60 + seconds) / (12 * 3600) * 360
  

  var secondHand = document.querySelector('.second-hand')
  var minuteHand = document.querySelector('.minute-hand')
  var hourHand = document.querySelector('.hour-hand')

  setHandsStyle(secondDeg,secondHand)
  setHandsStyle(minuteDeg,minuteHand)
  setHandsStyle(hourDeg,hourHand)

/*  document.querySelector('.second-hand')
    .style.transform = `rotate(${-90 + secondDeg}deg)`

  document.querySelector('.minute-hand')
    .style.transform = `rotate(${-90 + minuteDeg}deg)`

  document.querySelector('.hour-hand')
    .style.transform = `rotate(${-90 + hourDeg}deg)`
*/
}
function setHandsStyle(deg,hand){
  if(deg===0){
    hand.style.transform = `rotate(${deg}deg)`
    hand.style.transition=`all 0s`
  }else{
    hand.style.transform = `rotate(${deg}deg)`
    hand.style.transition='all 0.3s cubic-bezier(.04, 1.8, .66, .8)'
  }

}


step()
setInterval(function () {
  step()
}, 1000)