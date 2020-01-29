class Adder {
    // sum( a + b);
    

    constructor(a,b){
        this.a = a;
        this.b = b;
    }
    //to return the sum of a + b
    sum(a,b) {
       return (this.a + this.b);
   }

    render(){
    let phrase = `The sum of ${this.a} and ${this.b} is ${this.sum()} `;
      console.log(phrase);  
    }
}


module.exports = Adder;