// setTimeout

/* setTimeout(() => {
 console.log('set timeout') 
}, 4000); */

//setInterval

let clear =setInterval(() => {
 console.log('set a interval fro 2 minutes') 
}, 2000);

//clearInterval(clear)

setTimeout(() => {
 clearInterval(clear) 
 console.log('set timeout') 
}, 4000);