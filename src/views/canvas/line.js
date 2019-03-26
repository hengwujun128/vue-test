class Line {
  constructor (options) {}
  drawSolidLine (context, startX, startY, endX, endY, lineWidth, color) {
    // 使用栈保存当前的使用状态
    context.save()
    context.strokeStyle = color
  }
}
