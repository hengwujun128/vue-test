export default class Path {
  constructor(option) {

  }
  drawTriangle(context) {
    context.beginPath()
    context.moveTo(130, 50)
    context.lineTo(155, 25)
    context.lineTo(155, 75)
    // fill color
    // context.fill()
    // stroke need closePath()
    context.closePath()
    context.stroke()
  }

  drawCircle(context) {

  }
}
