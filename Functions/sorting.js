

let vals = [5,4,9,2,1];
console.log(vals);
vals.sort();
console.log(vals);

//[5,4,9,2,1] and then
//[1,2,4,5,9] sorted in numeric order DID NOT MAKE NEW ARRAY
//** if you treat numbers (OR have double digit numbers, then .sort treats them as strings) as string it will only look at the first number and sort those numerically**
// example: let val= ['34','95','1000','230'] would sort as:
// ['1000','230','34','95']

//if let vals = ['a','hello','b','goodbye']
// it would sort to ['a','a','goodbye', 'hello'] sorted in alphabetical order 

// if let vals =['a','hello','B','goodbye'] 
// it would sort to ['B', 'a', 'goodbye', 'hello']- sorted in alphabetical order but capital letters come first. 

// if  let vals =['a','5','B','2'] 
//it would sort to ['2','5','B','a'] because numbers are sorted first numerically, then capital letters alphabetically, and then lowercase numbers alphabetically
//**THIS IS THE DEFAULT*/

//if  let = vals [{x:5, y:6}, {x:2, y:10}]; 
//sorted it would not change the order of the objects

//if you want to sort something yourself besides numbers and letters you need to make the comparison yourself. that is why sort is a higher order function.

function compare(a,b){

    return a.y-b.y 
} 
vals.sort(compare);
//will return 0: {x:5, y:6}
//     return 1: {x:2, y:10}

// if return b.y-a.y
//will return 0:{x:2, y:10}
//will return 1:{x:5, y:6}