/*! Built with http://stenciljs.com */

App.loadStyles("my-dropdown","\nmy-dropdown.hydrated{visibility:inherit}");
App.loadComponents(

/**** module id (dev mode) ****/
"my-dropdown",

/**** component modules ****/
function importComponent(exports, h, Context, publicPath) {
"use strict";
// @stencil/core

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

exports['my-dropdown'] = Dropdown;
},


/***************** my-dropdown *****************/
[
/** my-dropdown: tag **/
"my-dropdown",

/** my-dropdown: members **/
[
  [ "title", /** prop **/ 1, /** observe attribute **/ 1, /** type string **/ 2 ],
  [ "toggle", /** state **/ 5, /** do not observe attribute **/ 0, /** type any **/ 1 ]
],

/** my-dropdown: host **/
{},

/** my-dropdown: events **/
[
  [
    /*****  my-dropdown onToggle ***** /
    /* event name ***/ "onToggle"
  ]
]

]
);