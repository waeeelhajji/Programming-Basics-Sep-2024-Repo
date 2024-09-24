// Arrays 

// arrays allow us to group related data with each other
// they are build with square brackets []
//  we separate elements with a comma ,
//---------------0--------1----------2-
var UserData = ["Dwight","Schrute","beetsbears@battlestar.com"]
console.log(UserData[2]) // Schrute
console.log(UserData) // ["Dwight","Schrute","beetsbears@battlestar.com"]

// More than one Datat Type
// Index ----------0------1-------2----3
var randomData = [125,"hello", true,null]

// Add to the Array
UserData.push("123456789")

console.log(UserData)  // ["Dwight","Schrute","beetsbears@battlestar.com","123456789"]

// UserData =  ["Dwight","Schrute","beetsbears@battlestar.com","123456789"]

UserData.length // 20 - 1 = 0 1 2  3

console.log(UserData.length-1) // 3 / 2 1.5
console.log(UserData[UserData.length-1]) // "123456789"
// Delete something in Array
UserData.pop()


