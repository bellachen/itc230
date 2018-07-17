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
    return snacks.find(function(snack) {
        return snack.name.toLowerCase() === name;
        });
};

exports.delete = function(name) {
    var exist = this.get(snack.name.toLowerCase() === name);
    if(exist) {
        // var position = snacks[result]; //Locate position
        // snacks.splice(0,position); //Remove from array
    }
};
