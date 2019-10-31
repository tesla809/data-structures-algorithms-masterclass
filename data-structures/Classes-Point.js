class Point {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  // Class method
  // utility method for Points
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  } 
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2));

/*
Class methods in use.
Makes more sense to have distance()
as a class method instead of a instance method.

Object oriented programming is just about
organizing things to make them easier to 
understand.

Class method keyword: static
*/