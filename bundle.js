var $ = function (arg) {
    if (typeof arg === "string") {
        var instance_1 = {
            elements: document.querySelectorAll(arg),
            on: function (e, cb) {
                instance_1.elements.forEach(function (element) {
                    element.addEventListener(e, function () {
                        cb(element);
                    });
                });
                return instance_1;
            },
            html: function () {
                return instance_1.elements.length == 1
                    ? instance_1.elements[0]
                    : Array.prototype.reduce.call(instance_1.elements, function (html, node) {
                        return html + (node.outerHTML || node.nodeValue);
                    }, "");
            },
            text: function (index) {
                if (index === void 0) { index = 0; }
                return instance_1.elements[index].innerText;
            },
            css: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (typeof (args[0] === "string") && typeof (args[1] === "string")) {
                    instance_1.elements.forEach(function (el) {
                        el.style[args[0]] = args[1];
                    });
                }
                if (typeof args[0] === "object") {
                    instance_1.elements.forEach(function (el) {
                        for (var rule in args[0]) {
                            el.style[rule] = args[0][rule];
                        }
                    });
                }
                return instance_1;
            },
            attr: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (args.length == 1)
                    return instance_1.elements[0].getAttribute(args[0]);
                instance_1.elements.forEach(function (el) {
                    el.setAttribute(args[0], args[1]);
                });
                return instance_1;
            }
        };
        return instance_1;
    }
    else {
        window.addEventListener("DOMContentLoaded", arg());
    }
};
//# sourceMappingURL=bundle.js.map