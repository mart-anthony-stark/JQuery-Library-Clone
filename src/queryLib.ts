const $ = (arg: string | CallableFunction) => {
  if (typeof arg === "string") {
    const instance = {
      elements: document.querySelectorAll(arg),
      // Add event handler
      on: (e, callback: Function) => {
        instance.elements.forEach((element) => {
          element.addEventListener(e, (event: Event) => {
            callback(event);
          });
        });

        return instance;
      },
      // Returns html
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
      // Returns text
      text: (index: number = 0) => {
        return (instance.elements[index] as HTMLElement).innerText;
      },
      // Sets css properties
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
      // Sets attributes
      attr: (...args: [attribute: string, value?: any]) => {
        if (args.length == 1) return instance.elements[0].getAttribute(args[0]);

        instance.elements.forEach((el) => {
          el.setAttribute(args[0], args[1]);
        });

        return instance;
      },
      // Hides element
      hide: () => {
        instance.elements.forEach((el) => {
          (el as HTMLElement).style.display = "none";
        });
      },
      // Reveals element
      show: () => {
        instance.elements.forEach((el) => {
          (el as HTMLElement).style.display = "block";
        });
      },
      // Adds className
      addClass: (className: string) => {
        instance.elements.forEach((el) => {
          (el as HTMLElement).classList.add(className);
        });
      },
      // removes className
      removeClass: (className: string) => {
        instance.elements.forEach((el) => {
          (el as HTMLElement).classList.remove(className);
        });
      },
      // Toggles className of elements
      toggleClass: (className: string, addOrRemove) => {
        instance.elements.forEach((el) => {
          (el as HTMLElement).classList.toggle(className, addOrRemove);
        });
      },
      slideUp: (
        duration: number = 0.5,
        easing: string = "ease",
        delay: number = 0
      ) => {
        instance.elements.forEach((el) => {
          (
            el as HTMLElement
          ).style.transition = `${duration}s ${easing} ${delay}s`;
          (el as HTMLElement).style.transform = `translateY(-100vh)`;
          (el as HTMLElement).style.opacity = "0";
        });
      },
    };

    return instance;
  } else {
    window.addEventListener("DOMContentLoaded", arg());
  }
};
