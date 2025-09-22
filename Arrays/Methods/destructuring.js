let array = [10,20,30,40,50];

let [a,b,...c] = array;

console.log("a:"+a)
console.log("b:"+b)
console.log("c:"+c)

// Destructure this Array to get Fisrtname and LastName 

let fullname = ["Shreyash", "Kawale"];

let [Firstname, Lastname] = fullname;

console.log(`Firstname: ${Firstname}`)
console.log(`LastName: ${Lastname}`)

