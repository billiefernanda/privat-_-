// "use strict";
// function scope(){
//     b = 10
// }
// scope()
// console.log(b)
// "use strict";
// function scope() {
//     b = 10
// }
// scope()
// console.log(b)

var a = 10

"use strict";

function scope(){
    a = 12
	console.log(a)
}

scope()
