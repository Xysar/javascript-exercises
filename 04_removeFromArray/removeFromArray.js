const removeFromArray = function(array , ...args) {
args.forEach(element => {
    array = array.filter(function(ele){
        return ele !== element;
    })
});
       
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
