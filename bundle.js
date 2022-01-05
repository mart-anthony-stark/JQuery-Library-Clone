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
            }
        };
        return instance_1;
    }
    else {
        window.addEventListener("DOMContentLoaded", arg());
    }
};
//# sourceMappingURL=bundle.js.map