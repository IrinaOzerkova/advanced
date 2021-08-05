const myFunc = function(arg) {
     if (typeof arg !='string')   {
         return 'no string';
     }    else {
         arg = arg.trim();
         if (arg.length > 30) {
             arg = arg.substring(0,30) + '...';
         } 
             return arg;
     }
};

console.log(myFunc(5));
console.log(myFunc('  12345  '));
console.log(myFunc('qwertyuiopasdfghjklzxcvbnm1234567890'));