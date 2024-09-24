// ======= FOR LooP ==========

// === General Syntax
// 3S
// Start ==  initialization
// Stop == condition
// Steps == final Expression

// Recipe
// for(StaticRange,stop,steps){

// }


for(var i = 0 ; i <10 ;i++){
console.log(i)
}

i ++ // increment the i + 1
i+=1
i +1 


var UserData = ["Dwight","Schrute","beetsbears@battlestar.com"]

for(var i = 0 ;2<=2; i++){
    console.log(UserData[1]) // "Schrute" i + 1
}
var ages =[14,15,78,18,65,45,23]
for(var i = 0 ;i<=ages.length-1; i++){
    if (ages[i] == 18) { // True
        console.log("True")
        break;
       }else {
           console.log("False")
       }
    console.log(UserData[1]) // "Schrute" i + 1
}
