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
      },
      html: () => {
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
    };

    return instance;
  } else {
    window.addEventListener("DOMContentLoaded", arg());
  }
};
