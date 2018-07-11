var snacks = [
 { name:'Candy', price:2, brand:'Sour Patch' },
 { name:'Cupcake', price:4, brand:'Cupcake Royale'},
 { name:'Chips', price:3, brand:'Lays' },
 { name:'Chocolate', price:5, brand:'Lindt'},
 { name:'Donut', price:1, brand:'Mighty Os' }
];

exports.getAll = function () {
    return snacks;
};

exports.get = function(name) {
    //var result = snacks.find(snack.name === name){ //NOT WORKING: use find method to look for searched name in array
    //  return result;
    //}
};

exports.delete = function(name) {
   //var result = snacks.find(snack.name === name){ //NOT WORKING: Find searched name in array
   //     var position = snacks[result]; //NOT WORKING: Locate position its in 
   //     snacks.splice(0,position); //NOT WORKING: Remove from array
   //}
};
