/*
[Object]
property를 불러오는 방법은 2가지가 있다.

1. console.log(player.name); => tomato
2. console.log(player["name"]); => tomato

또한 property를 바꾸는 것은 가능하지만 
선언된 object를 바꾸는 것은 불가능하다.

그리고 property를 새로 추가하는 것도 가능하다.

[Function]
unction 선언 :
function 함수명() {
실행코드
}

funtion 실행 : 함수명();
argument(인수)를 보내야 하는데 인수란 함수를 실행하는 동안
어떤 정보를 함수에게 보낼 수 있는 방법이다.
*/

const objectA = {
    name : "A",
    age : 17,
    say : function say(){
        console.log("Hello My name is A");
    }
}
const objectB = {
    name : "B",
    age : 17,
    say : function say(){
        console.log("Hello My name is B");
    }
}
const objectC = {
    name : "C",
    age : 17,
    say : function say(){
        console.log("Hello My name is C");
    }
}

objectA.say;