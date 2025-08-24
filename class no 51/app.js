/**    destucturing     */

let obj = { name: 'subhan', email: 'akhtarsubhan740@gmail.com' }
let { name } = obj;
console.log(name);




/**    destucturing     */

let obj1 = { name1: 'subhan', email1: 'akhtarsubhan740@gmail.com', sub: { s: 'akhtar' } }
let { sub } = obj1;
let { s } = sub;
console.log(s);



/*        default => default value set krvany ka lia use hota ha , spread , rest */

function abc(...rest) {
    console.log(rest);

};
abc(1, 2, 3, 4, 5, 6, 7)





let arr1 = [1,2,3]
let arr2 = [4,5,63]
let finalarr = [...arr1 , ...arr2]
console.log(finalarr);



let ref = {name:'suban' , sub: { s: 'akhtar' } };
let ref1 = {...ref , sub:{...ref.sub}};

ref.sub.s = 'subhan';




console.log(ref1 , ref);
