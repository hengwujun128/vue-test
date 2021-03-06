export default class Circle {
  constructor (options = {}) {
    // 1.coordinate initialization
    this.x = options.x || 0
    this.y = options.y || 0
    this.radius = options.radius || 60
    // 2.
    this.vx = options.vx || 0
    this.vy = options.vy || 0
    // 3.rotation,scale
    this.rotation = 0
    this.scaleX = 1
    this.scaleY = 1
    // 4.color,lineWidth
    this.color = utils.parseColor(options.color)
    this.lineWidth = 1
    // 5.backImg
    this.backImg = options.backImg || ''
  }
  // 把canvas 上下文传入
  draw (context) {
    // 使用栈保存当前的使用状态
    context.save()
    // 移动上下文坐标到指定位置(注意在原始的坐标进行累加)
    context.translate(this.x, this.y)
    context.rotate(this.rotation)
    context.scale(this.scaleX, this.scaleY)

    context.lineWidth = this.lineWidth
    context.fillStyle = this.color
    // draw image if this.backImage is true
    // if (this.backImg) {
    //   context.drawImage(this.backImg, -60, -60, 120, 120)
    // } else {
    context.beginPath()
    context.arc(0, 0, this.radius, 0, Math.PI * 2, true)
    context.closePath()
    context.fill()
    // }
    if (this.lineWidth > 0) {
      context.stroke()
    }
    //
    context.restore()
  }
  getBounds () {
    return {
      x: this.x - this.radius,
      y: this.y - this.radius,
      width: this.radius * 2,
      height: this.radius * 2
    }
  }
}
