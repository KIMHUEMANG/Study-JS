//음주 가능 나이 측정기
const age = parseInt(prompt("How old are you>"));

if(isNaN(age) || age < 0){
    console.log("please write a positive number");
}
else if(age < 20){
    console.log("You can't drink");
}
else if(age > 19 && age <= 50){
    console.log("You can drink");
}
else if(age > 50 && age < 80){
    console.log("I recommend you to exercise");
}
else if(age >= 80){
    console.log("You can do whatever you want");
}

//자신의 직군? 계산기
if(age >= 8 && age < 14){
    console.log("초등학생 입니다.");
}
else if(age > 13 && age < 17){
    console.log("중학생 입니다");
}
else if(age > 16 && age < 20){
    console.log("고등학생 입니다");
}
else if(age > 19){
    console.log("성인입니다");
}
