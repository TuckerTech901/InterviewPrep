
let age =15; 
if (age >= 18){
    console.log ('You are an adult!');
    
}else{
    console.log ('You are a kid!');
};

//another way the ternary operator

console.log((age >=18) ? "you are an adult!": "you are a kid!");

//another example

var stop; 

age >18 ? (
    console.log ("Ok you can go."),
    stop = false
):(
    console.log("Sorry, you are much too young!"),
    stop= true
);

//ternary inside another ternary

var firstCheck = false, 
secondCheck = false, 
access = firstCheck ? "Access denied" : secondCheck ? "Access denied" : "Access granted";
// So if firstCheck was true you would get ""access denied"", but since it is false go to the second condition (behind the colon) of secondCheck and since it is false it says "access granted"