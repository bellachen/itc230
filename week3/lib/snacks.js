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

exports.get = (name) => {
    return snacks.find((item) => {
        return item.name.toLowerCase() === name.toLowerCase();
    });
};

exports.delete = (name) => {
    snacks = snacks.filter((item) => {  // create new array with all elements that pass the test
        return item.name !== name;
    });
    return {snacks}; // return what was deleted
};