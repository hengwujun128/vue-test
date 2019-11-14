export default class Path {
  constructor (option) {

  }

  /**
   * First, you create the path
   * Then you use drawing commands to draw into the path
   * Once the path has been created, you can stroke or fill the path to render it
   *
   * Note: When you call fill(), any open shapes are closed automatically,
   *  so you don't have to call closePath(). This is not the case when you call stroke().
   */

  drawTriangle (context) {
    // 1.beginPath()
    context.beginPath()
    // 2.pathMethods()
    context.moveTo(130, 50)
    context.lineTo(155, 25)
    context.lineTo(155, 75)

    // 2.1 closePath()
    context.closePath()
    // 3.1 Draws the shape by stroking its outline.
    context.stroke()
    // 3.2 Draws a solid shape by filling the path's content area.
    // context.file()
  }

  drawCircle (context) {

  }
}
