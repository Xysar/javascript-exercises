const reverseString = function(str) {
let res = "";
let len = str.length;
for(let i =0; i< len ; i++){
    let character = str.charAt(0);
    res = character + res; 
    str = str.substring(1);
}
return res;
};

// Do not edit below this line
module.exports = reverseString;
