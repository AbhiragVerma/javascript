// Immediately Invoked function experience (IIFE)

(function chai() {
    console.log(`DB connected`);
})();

(  () => {
    console.log(`DB connected two`);
})()