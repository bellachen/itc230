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
    return snacks.find(function(item) {
        return item.name.toLowerCase() === name.toLowerCase();
        });
};

exports.delete = function(name) {
    var position = snacks.findIndex(name);
    if(position != -1) {
        snacks.splice(0,position);
    }
};