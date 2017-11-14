import { } from '@stencil/core';
var MyName = /** @class */ (function () {
    function MyName() {
    }
    MyName.prototype.render = function () {
        return (h("div", null,
            "Hello, my name is ",
            this.first,
            " ",
            this.last,
            h("my-dropdown", { title: "Toggle" }, "Hello World")));
    };
    MyName.prototype.log = function (event) {
        console.log(event);
    };
    return MyName;
}());
export { MyName };
