/*
     Typescript class example using a conductor to output a string and number datatype 

*/

class   MyShoes {
   private type:   string;
   private color:  string;
   private size:   number;

/// function to invoked during object creation
constructor(type:string, color:string, size:number)

{
    this.type = type;
    this.color = color;
    this.size = size;
}

// Wrapper on the properties - present to the outside world 
public displayMyShoeInfo(): void {
console.log(`Shoe Type:` + this.type); // this references the variables that will be trying to access its properties 
console.log(`Shoe Color:` + this.color);
console.log(`Shoe Size:` + this.size);  
}


}


//declaring references for MyShoes objects

var shoe1:  MyShoes; //reference of an object 

var shoe2:  MyShoes;

var shoe3:  MyShoes;
 

//Object instantiation or creation 
shoe1 = new MyShoes ("Nikes", "Black", 12.5);
console.log('Shoe 1 Details');
console.log("-------------------------")
// console.log("Shoe Type:" + shoe1.type);
// console.log("Shoe Color:" + shoe1.color);
// console.log("Shoe Size:" + shoe1.size);
shoe1.displayMyShoeInfo();

shoe2 = new MyShoes ("Mocassins", "Tan", 10.5);
console.log('Shoe 2 Details');
console.log("-------------------------")
// console.log("Shoe Type:" + shoe2.type);
// console.log("Shoe Color:" + shoe2.color);
// console.log("Shoe Size:" + shoe2.size);
 shoe2.displayMyShoeInfo();

shoe3 = new MyShoes ("Reebok", "Gray", 11.5);
console.log('Shoe 3 Details');
console.log("-------------------------")
// console.log("Shoe Type:" + shoe3.type);
// console.log("Shoe Color:" + shoe3.color);
// console.log("Shoe Size:" + shoe3.size);
shoe3.displayMyShoeInfo();



