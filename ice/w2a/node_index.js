console.log("Hello World");
console.log("Can I have some sleep please??");
var x = 100;
var y = [1];



function scopeDemo(y1) {
    console.log(x)
    let a = 3, b = 4, c = 5;
    x1[0] = 500;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(y1);
    y1[0]=500;
    var x = 2;
    if(true) {
        var x = 0;
    }
    return a;
}
// console.log(scopeDemo(y) + 10);
console.log(y);
console.log(0);
x=scopeDemo(y1);
