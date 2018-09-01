// 对rectangle 做封装
export default class Rectangle {
  constructor(options = {}) {
    // 1.coordinate 初始化
    this.x = options.x || 0
    this.y = options.y || 0
    // 2.速度向量初始化为0
    this.vx = options.vx || 0;
    this.vy = options.vy || 0;

    // 3.rotation ,scale初始化
    this.rotation = 0;
    this.scaleX = 0;
    this.scaleY = 0;


  }
  // 绘制方法,传入 canvas 上下文
  /**
   * There are three functions that draw rectangles on the canvas:
   * fileRect():Draws a filled rectangle.
   * strokeRect():Draws a rectangular outline.
   * clearRect():Clears the specified rectangular area, making it fully transparent.
   * @param {*} context 
   */
  draw(context) {
    // saves the entire state of the canvas by pushing the current state onto a stack.
    context.save();
    // 1.fillRect(this.x,this.y,this.width,this.height) 
    context.fillRect(25, 25, 100, 100);
    // clear rect
    context.clearRect(45, 45, 60, 60);
    // strock rect
    context.strokeRect(50, 50, 50, 50)
    context.restore()
  }
}
