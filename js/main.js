let age1=parseInt(prompt("enter age 1"));
let age2=parseInt(prompt("enter age 2"));
let age3=parseInt(prompt("enter age 3"));

if (age1 >= age2){
    if (age1 >= age3 && age2>=age3){
        console.log("person1 age is older");
        console.log("person 3 is young");
    }
    else if(age1 >= age3 && age2<=age3){
        console.log("person1 age is older");
        console.log("person2 is young");
    }
    else{
        console.log("person3 age is older");
        console.log("person2 is young");
    }
}
else if (age2 >= age3 && age1>=age3){
    console.log("person2 age is older");
    console.log("person3 is young");
}
else if (age2 >= age3 && age1<=age3){
    console.log("person2 age is older");
    console.log("person1 is young");
}
else{
    console.log("person3 age is older");
    console.log("person1 is young");
}