const $ = (arg: string | CallableFunction) => {
  if (typeof arg === "string") {
    const instance = {
      elements: document.querySelectorAll(arg),
      on: (e, cb) => {
        instance.elements.forEach((element) => {
          element.addEventListener(e, () => {
            cb(element);
          });
        });

        return instance;
      },
      html: (): HTMLElement => {
        return instance.elements.length == 1
          ? instance.elements[0]
          : Array.prototype.reduce.call(
              instance.elements,
              function (html, node) {
                return html + (node.outerHTML || node.nodeValue);
              },
              ""
            );
      },
      text: (index: number = 0) => {
        return (instance.elements[index] as HTMLElement).innerText;
      },
      css: (...args) => {
        if (typeof (args[0] === "string") && typeof (args[1] === "string")) {
          instance.elements.forEach((el) => {
            (el as HTMLElement).style[args[0]] = args[1];
          });
        }

        if (typeof args[0] === "object") {
          instance.elements.forEach((el) => {
            for (let rule in args[0]) {
              (el as HTMLElement).style[rule] = args[0][rule];
            }
          });
        }

        return instance;
      },
      attr: (...args: [attribute: string, value?: any]) => {
        if (args.length == 1) return instance.elements[0].getAttribute(args[0]);

        instance.elements.forEach((el) => {
          el.setAttribute(args[0], args[1]);
        });

        return instance;
      },
    };

    return instance;
  } else {
    window.addEventListener("DOMContentLoaded", arg());
  }
};
