

for (let i=1; i<=5; i++);{
    for (let j =1; j <=3; j++){

    }
    console.log(i,j);
}
//it would show (11,12,13, 21,22,23, 21, 32, 33, 41,42,43, 51,52,53) where every first number is the i loop and every second number is the j loop. remember the j loop goes through its entire iteration before it goes back to i. So i=1, j=123; i=2, j=123, etc...when you put a for loop inside a for loop you will repeat the inner loop in its entirety a multiple number of times. 

let array =['red','blue','green','orange']
    for (let i=0; i< array.length; i++){
        console.log(array[i]);
    for (let j=0; j<= array.length; j++){
        console.log ('    ' + array[j]);
    }
    }
    // it would show:
    //red
        //red, blue, green, orange (iterating through the entire inner loop of j before going back to outer i loop)
    //blue
        //red, blue, green, orange
    //green 
        //red, blue, green, orange 


    // //avoid duplicates     
    // let array =['red','blue','green','orange']
    // for (let i=0; i< array.length; i++){
    //     console.log(array[i]);
    // for (let j=i+1; j< array.length; j++){
    //     console.log ('    ' + array[j]);
    // }
    // }
    // //it gives you the only unique patterns. j is always greater than i. 