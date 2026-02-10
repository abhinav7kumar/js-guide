console.log(2>1);
console.log(2<1);
console.log(2>=1);
console.log(2<=1);
console.log(2==1);
console.log(2!=1);


//avoid type coercion, use strict equality operator (===) instead of loose equality operator (==)

console.log(null>0);
console.log(null==0);
console.log(null>=0); //compare null with 0, it converts null to number, which is 0, so 0>=0 is true

console.log(undefined>0); //undefined is not converted to number, it remains undefined, so the comparison is false

 // === strict equality operator
console.log("2"===2);