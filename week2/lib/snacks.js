var snacks = [
 { name:'Candy', price:2, brand:'Sour Patch' },
 { name:'Cupcake', price:4, brand:'Cupcake Royale'},
 { name:'Chips', price:3, brand:'Lays' },
 { name:'Chocolate', price:5, brand:'Lindt'},
 { name:'Donut', price:1, brand:'Mighty Os' }
];

exports.getAll = () => {
    return snacks;
};

exports.get = (name) => {
    snacks = snacks.find((item) => {
        return item.name.toLowerCase() === name;
    });
};

exports.delete = (name) => {
    var result = snacks.find(item, index);
    if (item.name.toLowerCase() == name ) {
        snacks.splice(index, 1);
        return true; 
    }else{
        return result != false;  
    }
};

//exports.delete = function(name) {
//    var exist = this.get(snack.name.toLowerCase() === name);
//    if(exist) {
//        var position = snacks[result]; //Locate position
//        snacks.splice(0,position); //Remove from array
//    }
//};