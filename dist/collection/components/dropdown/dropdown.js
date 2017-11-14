import { EventEmitter } from '@stencil/core';
var Dropdown = /** @class */ (function () {
    function Dropdown() {
        this.title = '';
        this.toggle = false;
    }
    Dropdown.prototype.render = function () {
        var _this = this;
        return (h("div", null,
            h("button", { onClick: function () { return _this.toggleClick(); } },
                this.title,
                " ",
                this.toggle ? h("span", null, "\u25B2") : h("span", null, "\u25BC")),
            h("div", { style: { display: this.toggle ? 'block' : 'none' } },
                h("slot", null))));
    };
    Dropdown.prototype.toggleClick = function () {
        this.toggle = !this.toggle;
        this.onToggle.emit({ visible: this.toggle });
    };
    return Dropdown;
}());
export { Dropdown };
