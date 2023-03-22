import React from 'react';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var classnames = {exports: {}};

/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

(function (module) {
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames() {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					if (arg.length) {
						var inner = classNames.apply(null, arg);
						if (inner) {
							classes.push(inner);
						}
					}
				} else if (argType === 'object') {
					if (arg.toString === Object.prototype.toString) {
						for (var key in arg) {
							if (hasOwn.call(arg, key) && arg[key]) {
								classes.push(key);
							}
						}
					} else {
						classes.push(arg.toString());
					}
				}
			}

			return classes.join(' ');
		}

		if (module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	}());
} (classnames));

var cx = classnames.exports;

var Button = function (_a) {
    var className = _a.className, _b = _a.buttonType, buttonType = _b === void 0 ? "default" : _b, _c = _a.size, size = _c === void 0 ? "middle" : _c, _d = _a.shape, shape = _d === void 0 ? "default" : _d, children = _a.children, rest = __rest(_a, ["className", "buttonType", "size", "shape", "children"]);
    var height = React.useMemo(function () {
        if (size === "small")
            return "h-6";
        if (size === "large")
            return "h-10";
        return "h-8";
    }, [size]);
    // color
    var color = React.useMemo(function () {
        if (buttonType === "primary")
            return "text-white";
        if (buttonType === "link" || buttonType === "ghost")
            return "text-primary";
        return "text-txt-black";
    }, [buttonType]);
    // background
    var background = React.useMemo(function () {
        if (buttonType === "primary")
            return "bg-primary";
        return "bg-transparent";
    }, [buttonType]);
    // border
    var border = React.useMemo(function () {
        if (buttonType === "primary")
            return "border border-primary";
        if (buttonType === "ghost")
            return "border border-current";
        if (buttonType === "dashed")
            return "border border-dashed border-gray-4";
        if (["link", "text"].includes(buttonType))
            return "border border-white";
        return "border border-gray-4";
    }, [buttonType]);
    // radius
    var radius = React.useMemo(function () {
        if (shape === "circle")
            return "rounded-full";
        if (shape === "round")
            return "rounded-round";
        return "rounded-sm";
    }, [shape]);
    return (React.createElement("button", __assign({ className: cx("px-2", height, color, background, border, radius, className) }, rest), children));
};

var Title = function (_a) {
    var _b = _a.level, level = _b === void 0 ? 1 : _b; _a.copyable; var children = _a.children, className = _a.className;
    var Heading = "h".concat(level);
    var fontSize = React.useMemo(function () {
        if (level === 5)
            return 'text-h5 leading-h5';
        if (level === 4)
            return 'text-h4 leading-h4';
        if (level === 3)
            return 'text-h3 leading-h3';
        if (level === 2)
            return 'text-h2 leading-h2';
        return 'text-h1 leading-h1';
    }, [level]);
    return (React.createElement(Heading, { className: cx('text-txt-black font-medium', fontSize, className) }, children));
};

var ModalContainer = function (_a, ref) {
    _a.className; var _b = _a.width, width = _b === void 0 ? "520px" : _b, children = _a.children, rest = __rest(_a, ["className", "width", "children"]);
    var widthStyle = React.useMemo(function () {
        return "w-[".concat(width, "]");
    }, [width]);
    return (React.createElement("div", __assign({ ref: ref, className: cx("h-max min-h-min-modal min-w-min-modal z-10 bg-white rounded", "flex flex-col justify-between animate-blowUp", widthStyle), style: { width: "".concat(width) } }, rest), children));
};
var ModalContainer$1 = React.forwardRef(ModalContainer);

var ModalHeader = function (_a) {
    var className = _a.className, _b = _a.title, title = _b === void 0 ? 'Title' : _b, onClose = _a.onClose;
    var handleClose = function () {
        onClose && onClose();
    };
    return (React.createElement("div", { className: cx('relative h-16 flex justify-center items-center border-b border-bd-modal', className) },
        React.createElement(Title, { level: 3 }, title),
        React.createElement(Button, { buttonType: 'text', className: 'absolute right-0 text-xl font-semibold', onClick: function () { return handleClose(); } }, "\u2715")));
};

var ModalFooter = function (_a) {
    var className = _a.className, cancelText = _a.cancelText, okText = _a.okText, onCancel = _a.onCancel, onOk = _a.onOk;
    var handleCancel = function () {
        onCancel && onCancel();
    };
    var handleOk = function () {
        onOk && onOk();
    };
    return (React.createElement("div", { className: cx('h-16 border-t border-bd-modal flex items-center justify-end p-4', className) },
        React.createElement(Button, { buttonType: 'default', size: "large", className: "w-24", onClick: function () { return handleCancel(); } }, cancelText),
        React.createElement(Button, { buttonType: 'primary', size: "large", className: "w-24 ml-4", onClick: function () { return handleOk(); } }, okText)));
};

var Modal = function (_a) {
    var maskClass = _a.maskClass; _a.modalClass; var headerClass = _a.headerClass, bodyClass = _a.bodyClass, footerClass = _a.footerClass, title = _a.title, header = _a.header, footer = _a.footer, _b = _a.maskClosable, maskClosable = _b === void 0 ? true : _b, visible = _a.visible, _c = _a.children, children = _c === void 0 ? "" : _c, _d = _a.cancelText, cancelText = _d === void 0 ? "Cancel" : _d, _e = _a.okText, okText = _e === void 0 ? "Ok" : _e, onClose = _a.onClose, onCancel = _a.onCancel, onOk = _a.onOk;
    var modalRef = React.useRef(null);
    var handleMaskClick = function (event) {
        var _a;
        if (maskClosable && !((_a = modalRef === null || modalRef === void 0 ? void 0 : modalRef.current) === null || _a === void 0 ? void 0 : _a.contains(event === null || event === void 0 ? void 0 : event.target))) {
            onClose && onClose();
        }
    };
    return (React.createElement("div", { className: cx('modal', maskClass, { hide: !visible }), onClick: function (e) { return handleMaskClick(e); } },
        React.createElement(ModalContainer$1, null,
            header === null && null,
            header && header,
            !header && (React.createElement(ModalHeader, { title: title, onClose: onClose, className: headerClass })),
            React.createElement("div", { className: cx("flex-1 p-4", bodyClass) }, children),
            footer === null && null,
            footer && footer,
            !footer && (React.createElement(ModalFooter, { className: footerClass, cancelText: cancelText, okText: okText, onCancel: onCancel, onOk: onOk })))));
};

var SpinnerOverlay = function (_a) {
    var children = _a.children;
    return (React.createElement("div", { className: "fixed top-0 left-0 w-screen h-screen bg-spinner z-[50]" }, children));
};

var Spinner = function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'default' : _b; _a.overlayClass; var _d = _a.spinnerClass, spinnerClass = _d === void 0 ? '' : _d, _e = _a.spinnerColor, spinnerColor = _e === void 0 ? '' : _e;
    var color = React.useMemo(function () {
        if (!!spinnerColor) {
            return {
                '--spinner-color': spinnerColor,
                '--spinner-color-80': "".concat(spinnerColor, "80"),
                '--spinner-color-85': "".concat(spinnerColor, "85"),
                '--spinner-color-90': "".concat(spinnerColor, "90"),
                '--spinner-color-95': "".concat(spinnerColor, "95"),
            };
        }
        return {};
    }, [spinnerColor]);
    if (type === 'default')
        return React.createElement("div", { className: cx("spinner", spinnerClass), style: __assign({}, color) });
    return (React.createElement(SpinnerOverlay, null,
        React.createElement("div", { className: cx("spinner absolute z-[50] inset-1/2", spinnerClass), style: __assign({}, color) })));
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/*\n! tailwindcss v3.1.8 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::-webkit-backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.visible {\n  visibility: visible;\n}\n.\\!visible {\n  visibility: visible !important;\n}\n.fixed {\n  position: fixed;\n}\n.absolute {\n  position: absolute;\n}\n.relative {\n  position: relative;\n}\n.inset-1\\/2 {\n  top: 50%;\n  right: 50%;\n  bottom: 50%;\n  left: 50%;\n}\n.right-0 {\n  right: 0px;\n}\n.top-0 {\n  top: 0px;\n}\n.left-0 {\n  left: 0px;\n}\n.z-10 {\n  z-index: 10;\n}\n.z-\\[50\\] {\n  z-index: 50;\n}\n.ml-4 {\n  margin-left: 1rem;\n}\n.mt-4 {\n  margin-top: 1rem;\n}\n.flex {\n  display: flex;\n}\n.hidden {\n  display: none;\n}\n.h-6 {\n  height: 1.5rem;\n}\n.h-10 {\n  height: 2.5rem;\n}\n.h-8 {\n  height: 2rem;\n}\n.h-max {\n  height: -webkit-max-content;\n  height: -moz-max-content;\n  height: max-content;\n}\n.h-16 {\n  height: 4rem;\n}\n.h-screen {\n  height: 100vh;\n}\n.h-56 {\n  height: 14rem;\n}\n.min-h-min-modal {\n  min-height: 320px;\n}\n.w-24 {\n  width: 6rem;\n}\n.w-screen {\n  width: 100vw;\n}\n.w-56 {\n  width: 14rem;\n}\n.min-w-min-modal {\n  min-width: 320px;\n}\n.flex-1 {\n  flex: 1 1 0%;\n}\n@-webkit-keyframes blowUp {\n\n  0% {\n    transform: scale(0);\n    opacity: 0;\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes blowUp {\n\n  0% {\n    transform: scale(0);\n    opacity: 0;\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.animate-blowUp {\n  -webkit-animation: blowUp .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;\n          animation: blowUp .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;\n}\n.flex-col {\n  flex-direction: column;\n}\n.items-center {\n  align-items: center;\n}\n.justify-end {\n  justify-content: flex-end;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.rounded-round {\n  border-radius: 40px;\n}\n.rounded-sm {\n  border-radius: 0.125rem;\n}\n.rounded {\n  border-radius: 0.25rem;\n}\n.rounded-xl {\n  border-radius: 0.75rem;\n}\n.border {\n  border-width: 1px;\n}\n.border-t {\n  border-top-width: 1px;\n}\n.border-b {\n  border-bottom-width: 1px;\n}\n.border-dashed {\n  border-style: dashed;\n}\n.border-primary {\n  --tw-border-opacity: 1;\n  border-color: rgb(24 144 255 / var(--tw-border-opacity));\n}\n.border-current {\n  border-color: currentColor;\n}\n.border-gray-4 {\n  --tw-border-opacity: 1;\n  border-color: rgb(217 217 217 / var(--tw-border-opacity));\n}\n.border-white {\n  --tw-border-opacity: 1;\n  border-color: rgb(255 255 255 / var(--tw-border-opacity));\n}\n.border-bd-modal {\n  border-color: rgba(0, 0, 0, .06);\n}\n.bg-primary {\n  --tw-bg-opacity: 1;\n  background-color: rgb(24 144 255 / var(--tw-bg-opacity));\n}\n.bg-transparent {\n  background-color: transparent;\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n.bg-spinner {\n  background-color: rgba(0, 0, 0, 0.2);\n}\n.p-4 {\n  padding: 1rem;\n}\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.text-h5 {\n  font-size: 16px;\n}\n.text-h4 {\n  font-size: 20px;\n}\n.text-h3 {\n  font-size: 24px;\n}\n.text-h2 {\n  font-size: 30px;\n}\n.text-h1 {\n  font-size: 38px;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.font-medium {\n  font-weight: 500;\n}\n.leading-h5 {\n  line-height: 1.5;\n}\n.leading-h4 {\n  line-height: 1.4;\n}\n.leading-h3 {\n  line-height: 1.35;\n}\n.leading-h2 {\n  line-height: 1.35;\n}\n.leading-h1 {\n  line-height: 1.23;\n}\n.text-red-500 {\n  --tw-text-opacity: 1;\n  color: rgb(239 68 68 / var(--tw-text-opacity));\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.text-primary {\n  --tw-text-opacity: 1;\n  color: rgb(24 144 255 / var(--tw-text-opacity));\n}\n.text-txt-black {\n  color: #000000D9;\n}\n.modal {\n  background-color: rgba(0, 0, 0, 0.2);\n  width: 100vw;\n  height: 100vh;\n  z-index: 0;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.spinner {\n  --spinner-color: #349eff;\n  --spinner-color-80: #349eff80;\n  --spinner-color-85: #349eff85;\n  --spinner-color-90: #349eff90;\n  --spinner-color-95: #349eff95;\n  width: 11.2px;\n  height: 11.2px;\n  border-radius: 11.2px;\n  box-shadow: 28px 0px 0 0 var(--spinner-color-80), 22.7px 16.5px 0 0 var(--spinner-color-85), 8.68px 26.6px 0 0 var(--spinner-color-90), -8.68px 26.6px 0 0 var(--spinner-color-95), -22.7px 16.5px 0 0 var(--spinner-color);\n  -webkit-animation: spin 1s infinite linear;\n          animation: spin 1s infinite linear;\n}\n\n@-webkit-keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}";
styleInject(css_248z);

export { Button, Modal, Spinner, Title };
//# sourceMappingURL=index.js.map
