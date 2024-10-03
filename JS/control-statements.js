//--------decision making----------//

// if statement----//
let AGE = 25;
if(AGE>=18){
    console.log("You are an Adult");

}

// if...else
let childAge = 2
if(childAge >= 3){
    console.log("Add them to School");
} else {
    console.log("Let them Enjoy and Grow");
}


let isCrying = false;

if(isCrying){
    console.log("Do not Cry");
} else {
    console.log("You didn't Cry");
}


// else if statement

let time = 16;
if(time< 12){
    console.log("Good Morning");
} 
else if(time >= 16){
    console.log("Good Evening");
} 
else {
    console.log("Good Afternoon");
}


//-----nested if-----//
let viewerAge = 17;
let hasIdProof = false;
let isWithParent = false;

if(viewerAge>=18){
     if(hasIdProof){
        console.log("Go watch the horror movie");
     } else {
        console.log("Not allowed to view horror movies because it is 'A' certified");
     }
} else {
    if(isWithParent){
        console.log("You can watch an Another PG-13 movie");
    } else {
        console.log("You need and Adult assistance");
    }
}