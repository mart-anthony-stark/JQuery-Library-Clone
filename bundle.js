var $ = function (arg) {
    if (typeof arg === "string") {
        var instance_1 = {
            elements: document.querySelectorAll(arg),
            // Add event handler
            on: function (e, callback) {
                instance_1.elements.forEach(function (element) {
                    element.addEventListener(e, function (event) {
                        callback(event);
                    });
                });
                return instance_1;
            },
            // Returns html
            html: function () {
                return instance_1.elements.length == 1
                    ? instance_1.elements[0]
                    : Array.prototype.reduce.call(instance_1.elements, function (html, node) {
                        return html + (node.outerHTML || node.nodeValue);
                    }, "");
            },
            // Returns text
            text: function (index) {
                if (index === void 0) { index = 0; }
                return instance_1.elements[index].innerText;
            },
            // Sets css properties
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
            // Sets attributes
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
            },
            // Hides element
            hide: function () {
                instance_1.elements.forEach(function (el) {
                    el.style.display = "none";
                });
            },
            // Reveals element
            show: function () {
                instance_1.elements.forEach(function (el) {
                    el.style.display = "block";
                });
            },
            // Adds className
            addClass: function (className) {
                instance_1.elements.forEach(function (el) {
                    el.classList.add(className);
                });
            },
            // removes className
            removeClass: function (className) {
                instance_1.elements.forEach(function (el) {
                    el.classList.remove(className);
                });
            },
            // Toggles className of elements
            toggleClass: function (className, addOrRemove) {
                instance_1.elements.forEach(function (el) {
                    el.classList.toggle(className, addOrRemove);
                });
            },
            slideUp: function (duration, easing, delay) {
                if (duration === void 0) { duration = 0.5; }
                if (easing === void 0) { easing = "ease"; }
                if (delay === void 0) { delay = 0; }
                instance_1.elements.forEach(function (el) {
                    el.style.transition = "".concat(duration, "s ").concat(easing, " ").concat(delay, "s");
                    el.style.transform = "translateY(-100vh)";
                    el.style.opacity = "0";
                });
            }
        };
        return instance_1;
    }
    else {
        window.addEventListener("DOMContentLoaded", arg());
    }
};
//# sourceMappingURL=bundle.js.map