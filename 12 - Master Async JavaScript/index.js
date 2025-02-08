// Sync and Async kya hota hai?
    // setTimeout(function () {
    //   console.log("Gaurav");
    // }, 2000);
// async js kya hai?
// JS is not asynchronous
// Async ki poori kahaani
// Single threading and Multi threading
// Callbacks
// Promises, then & catch
    // var ans = new Promise((res, rej) => {
    //   var number = Math.floor(Math.random() * 10);
    //   if (number < 5) {
    //     return res();
    //   } else {
    //     return rej();
    //   }
    // });
    // ans
    //   .then(function () {
    //     console.log("Below");
    //   })
    //   .catch(function () {
    //     console.log("Above");
    //   });
// Async & await
    // async function abcd() {
    //     const rawResponse = await fetch("https://randomuser.me/api/")
    //     const res = await rawResponse.json();
    //     console.log(res);
    // }
    // abcd();