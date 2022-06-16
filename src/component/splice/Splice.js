The splice() method adds and/or removes array elements.

The splice() method overwrites the original array.



const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(2, 0, "lemon", "kiwi");   

ist letter(2) is index or place to start operation 
so from orange changes will start

2nd letter(0) is to delete the Node. of things from array so 0 happened

after that things got added to array.

console.log(fruits)   => ['Banana', 'Orange', 'lemon', 'kiwi', 'Apple', 'Mango']

---------------------------------------------------------
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(3, 1, "lemon", "kiwi");

console.log(fruits)   => ['Banana', 'Orange', 'Apple', 'lemon', 'kiwi', ]

---------------------------------------------------

const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.splice(2, 2);

console.log(fruits)   => ["Banana", "Orange", "Kiwi"];


--------------------------------------------------------------