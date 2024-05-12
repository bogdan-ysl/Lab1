"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = require("mobx");
var localStorageUtils_1 = require("./localStorageUtils");
var MobXLocalStorageWrapper = /** @class */ (function () {
    function MobXLocalStorageWrapper(key, initialData) {
        this.key = key;
        this.initialData = initialData;
        this.data = null;
        (0, mobx_1.makeAutoObservable)(this);
        this.loadData();
    }
    MobXLocalStorageWrapper.prototype.loadData = function () {
        var data = (0, localStorageUtils_1.loadData)(this.key);
        this.data = data !== null ? data : this.initialData;
    };
    MobXLocalStorageWrapper.prototype.setData = function (data) {
        this.data = data;
        (0, localStorageUtils_1.saveData)(this.key, data);
    };
    return MobXLocalStorageWrapper;
}());
exports.default = MobXLocalStorageWrapper;
