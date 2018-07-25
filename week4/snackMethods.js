'use strict'
var Snack = require("./models/Snack");

//get all snacks
exports.getAll = () => {
    return Snack.find({}, (err, result) => {
        console.log(err)
        console.log(result)
        if (err) {
            console.log(err);
        } else {
            return result;
        }
    });
};

//get selected snack
exports.get = (name) => {
    return snacks.find((item) => {
        return item.name.toLowerCase() === name.toLowerCase();
    });
};

//delete selected snack
exports.delete = (name) => {
    snacks = snacks.filter((item) => {  // create new array with all elements that pass the test
        return item.name !== name;
    });
    return {snacks}; // return what was deleted
};