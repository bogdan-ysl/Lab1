"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeData = void 0;
var localStorageUtils_1 = require("./localStorageUtils");
function initializeData(key, initialData) {
    var existingData = (0, localStorageUtils_1.loadData)(key);
    if (!existingData) {
        (0, localStorageUtils_1.saveData)(key, initialData);
    }
}
exports.initializeData = initializeData;
