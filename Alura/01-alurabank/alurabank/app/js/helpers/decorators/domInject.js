System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function domInject(seletor) {
        return function (target, key) {
            var elemento;
            var getter = function () {
                if (!elemento) {
                    console.log("Buscando o " + seletor + " para injetar em " + key);
                    elemento = $(seletor);
                }
                return elemento;
            };
            Object.defineProperty(target, key, { get: getter });
        };
    }
    exports_1("domInject", domInject);
    return {
        setters: [],
        execute: function () {
        }
    };
});
