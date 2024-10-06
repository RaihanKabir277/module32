
// js dynamic type language 

const d = true;
console.log(typeof d);
// singe value rakhjle seta primituve 
// multiple value rakhle non primitive data type

let x = 5;
let y = x;
console.log(x, y);
y = 7
console.log(x, y);

let p ={job: 'web developer'};
let q = p;
// q = {job: 'backend end'};
// console.log(p, q);
q.job = 'front end developer';
console.log(p, q);