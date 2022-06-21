let a = parseInt(prompt());
let b = parseInt(prompt());
let c = parseInt(prompt());
//  x = ((-b + or - Math.sqrt(b**2 - (4*a*c)))/ 2 *a)

y = (b**2)-(4*a*c);
console.log("input", a, "input", b, "input", c  );
let d = Math.sqrt(y); 
console.log("square of y is", d);
x1 =((-b+d)/(2*a))
x2 =((-b-d)/(2*a))
console.log ( "x1 value is " , x1 , "x2 value is" , x2) 
