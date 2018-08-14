export default class Rectangle {
  constructor(options = {}) {
    this.x = options.x || 0
    this.y = options.y || 0
    this.vx = options.vx || 0;
    this.vy = options.vy || 0;

    // rotation ,scale
    this.rotation = 0;
    this.scaleX = 0;
    this.scaleY = 0;


  }
  draw(context) {
    // saves the entire state of the canvas by pushing the current state onto a stack.
    context.save();
    context.fillRect(25, 25, 100, 100);
    // clear rect
    context.clearRect(45, 45, 60, 60);
    // strock rect
    context.strokeRect(50, 50, 50, 50)
    context.restore()
  }
}
