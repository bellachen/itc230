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
