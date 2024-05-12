"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadData = exports.saveData = void 0;
function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}
exports.saveData = saveData;
function loadData(key) {
    var data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}
exports.loadData = loadData;
