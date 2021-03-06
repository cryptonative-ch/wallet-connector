function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var useWallet = require('use-wallet');
var ethers = require('ethers');
var Modal = _interopDefault(require('react-modal'));

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

// A type of promise-like that resolves synchronously and supports only one observer

const _iteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))) : "@@iterator";

const _asyncIteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))) : "@@asyncIterator";

// Asynchronously call a function and send errors to recovery continuation
function _catch(body, recover) {
	try {
		var result = body();
	} catch(e) {
		return recover(e);
	}
	if (result && result.then) {
		return result.then(void 0, recover);
	}
	return result;
}

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
var ButtonType;

(function (ButtonType) {
  ButtonType[ButtonType["primary"] = 0] = "primary";
  ButtonType[ButtonType["primaryLine"] = 1] = "primaryLine";
  ButtonType[ButtonType["secondary"] = 2] = "secondary";
  ButtonType[ButtonType["secondaryLine"] = 3] = "secondaryLine";
  ButtonType[ButtonType["primaryAlternative"] = 4] = "primaryAlternative";
})(ButtonType || (ButtonType = {}));

var PrimaryCSS = styled.css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  & {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n  }\n\n  &[disabled],\n  &[disabled]:hover {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n    cursor: not-allowed;\n    opacity: 0.5;\n  }\n"])), function (props) {
  return props.theme.buttonPrimary.backgroundColor;
}, function (props) {
  return props.theme.buttonPrimary.borderColor;
}, function (props) {
  return props.theme.buttonPrimary.color;
}, function (props) {
  return props.theme.buttonPrimary.backgroundColorHover;
}, function (props) {
  return props.theme.buttonPrimary.borderColorHover;
}, function (props) {
  return props.theme.buttonPrimary.colorHover;
}, function (props) {
  return props.theme.buttonPrimary.backgroundColorDisabled;
}, function (props) {
  return props.theme.buttonPrimary.borderColorDisabled;
}, function (props) {
  return props.theme.buttonPrimary.colorDisabled;
});
var PrimaryLineCSS = styled.css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  & {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n  }\n\n  &[disabled],\n  &[disabled]:hover {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n    cursor: not-allowed;\n    opacity: 0.5;\n  }\n"])), function (props) {
  return props.theme.buttonPrimaryLine.backgroundColor;
}, function (props) {
  return props.theme.buttonPrimaryLine.borderColor;
}, function (props) {
  return props.theme.buttonPrimaryLine.color;
}, function (props) {
  return props.theme.buttonPrimaryLine.backgroundColorHover;
}, function (props) {
  return props.theme.buttonPrimaryLine.borderColorHover;
}, function (props) {
  return props.theme.buttonPrimaryLine.colorHover;
}, function (props) {
  return props.theme.buttonPrimaryLine.backgroundColorDisabled;
}, function (props) {
  return props.theme.buttonPrimaryLine.borderColorDisabled;
}, function (props) {
  return props.theme.buttonPrimaryLine.colorDisabled;
});
var PrimaryAlternativeCSS = styled.css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  & {\n    border: 1px solid ", ";\n    background-color: ", ";\n    color: ", ";\n  }\n\n  &[disabled],\n  &[disabled]:hover {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n    cursor: not-allowed;\n  }\n"])), function (props) {
  return props.theme.buttonPrimary.borderColorHover;
}, function (props) {
  return props.theme.buttonPrimary.backgroundColor;
}, function (props) {
  return props.theme.buttonPrimary.color;
}, function (props) {
  return props.theme.buttonPrimaryLine.backgroundColorDisabled;
}, function (props) {
  return props.theme.buttonPrimaryLine.borderColorDisabled;
}, function (props) {
  return props.theme.colors.textColorLighter;
});
var SecondaryCSS = styled.css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n  & {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n    font-weight: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n  }\n\n  &[disabled],\n  &[disabled]:hover {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n    cursor: not-allowed;\n    opacity: 0.5;\n  }\n"])), function (props) {
  return props.theme.buttonSecondary.backgroundColor;
}, function (props) {
  return props.theme.buttonSecondary.borderColor;
}, function (props) {
  return props.theme.buttonSecondary.color;
}, function (props) {
  return props.theme.buttonSecondary.weight;
}, function (props) {
  return props.theme.buttonSecondary.backgroundColorHover;
}, function (props) {
  return props.theme.buttonSecondary.borderColorHover;
}, function (props) {
  return props.theme.buttonSecondary.colorHover;
}, function (props) {
  return props.theme.buttonSecondary.backgroundColorDisabled;
}, function (props) {
  return props.theme.buttonSecondary.borderColorDisabled;
}, function (props) {
  return props.theme.buttonSecondary.colorDisabled;
});
var SecondaryLineCSS = styled.css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n  & {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n  }\n\n  &[disabled],\n  &[disabled]:hover {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n    cursor: not-allowed;\n  }\n"])), function (props) {
  return props.theme.buttonSecondaryLine.backgroundColor;
}, function (props) {
  return props.theme.buttonSecondaryLine.borderColor;
}, function (props) {
  return props.theme.buttonSecondaryLine.color;
}, function (props) {
  return props.theme.buttonSecondaryLine.backgroundColorHover;
}, function (props) {
  return props.theme.buttonSecondaryLine.borderColorHover;
}, function (props) {
  return props.theme.buttonSecondaryLine.colorHover;
}, function (props) {
  return props.theme.buttonSecondaryLine.backgroundColorDisabled;
}, function (props) {
  return props.theme.buttonSecondaryLine.borderColorDisabled;
}, function (props) {
  return props.theme.buttonSecondaryLine.colorDisabled;
});

var getButtonTypeStyles = function getButtonTypeStyles(buttonType) {
  if (buttonType === void 0) {
    buttonType = ButtonType.primaryLine;
  }

  if (buttonType === ButtonType.primary) {
    return PrimaryCSS;
  }

  if (buttonType === ButtonType.secondary) {
    return SecondaryCSS;
  }

  if (buttonType === ButtonType.primaryLine) {
    return PrimaryLineCSS;
  }

  if (buttonType === ButtonType.secondaryLine) {
    return SecondaryLineCSS;
  }

  if (buttonType === ButtonType.primaryAlternative) {
    return PrimaryAlternativeCSS;
  }

  return PrimaryCSS;
};

var ButtonCSS = styled.css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n  align-items: center;\n  border-radius: 8px;\n  border-style: solid;\n  border-width: 1px;\n  cursor: pointer;\n  display: flex;\n  font-size: ", ";\n  line-height: ", ";\n  font-weight: 400;\n  height: 40px;\n  justify-content: center;\n  letter-spacing: 0.2px;\n  outline: none;\n  padding: 12px 17px;\n  pointer-events: ", ";\n  text-align: center;\n  transition: all 0.15s ease-out;\n  user-select: none;\n  white-space: nowrap;\n  font-family: Roboto;\n\n  ", "\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.fonts.defaultSize;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.fonts.defaultLineHeight;
}, function (props) {
  return props.disabled ? 'none' : 'initial';
}, function (props) {
  return getButtonTypeStyles(props.buttonType);
});

var _templateObject$1;
var Wrapper = styled__default.button(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteralLoose(["\n  ", "\n"])), ButtonCSS);
var Button = function Button(props) {
  var children = props.children,
      restProps = _objectWithoutPropertiesLoose(props, ["children"]);

  return React__default.createElement(Wrapper, Object.assign({}, restProps), children);
};

var _templateObject$2, _templateObject2$1;
var cssRotate = styled.keyframes(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteralLoose(["\n  from {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n"])));
var CSSSpinner = styled__default.div(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteralLoose(["\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  position: relative;\n  text-indent: -9999em;\n  border-top: 4px solid #304FFE33;\n  border-right: 4px solid #304FFE33;\n  border-bottom: 4px solid #304FFE33;\n  border-left: 4px solid #304FFE;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation: ", " 1.1s infinite linear;\n  animation: ", " 1.1s infinite linear;\n"])), cssRotate, cssRotate);
var Spinner = function Spinner(_) {
  return React__default.createElement(CSSSpinner, null);
};

var _templateObject$3;
var CommonDisabledCSS = styled.css(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteralLoose(["\n  &.disabled,\n  &.disabled:hover,\n  &:disabled,\n  &:disabled:hover,\n  &[disabled],\n  &[disabled]:hover {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n    cursor: not-allowed !important;\n    user-select: none !important;\n\n    .chevronDown {\n      filter: invert(46%) sepia(0%) saturate(1168%) hue-rotate(183deg) brightness(99%) contrast(89%);\n    }\n  }\n"])), function (props) {
  return props.theme.form.common.disabled.backgroundColor;
}, function (props) {
  return props.theme.form.common.disabled.borderColor;
}, function (props) {
  return props.theme.form.common.disabled.color;
});

var _templateObject$4, _templateObject2$2;
var ActiveCSS = styled.css(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteralLoose(["\n  &,\n  &:hover {\n    background-color: ", ";\n    border-color: ", ";\n\n    > svg path {\n      fill: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.colors.secondary;
}, function (props) {
  return props.theme.colors.secondary;
}, function (props) {
  return props.theme.colors.primary;
});
var Wrapper$1 = styled__default.button(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteralLoose(["\n  align-items: center;\n  background-color: #fff;\n  cursor: pointer;\n  display: flex;\n  flex-shrink: 0;\n  height: ", ";\n  justify-content: center;\n  outline: none;\n  padding: 0;\n  border: none;\n  transition: border-color 0.15s linear;\n  user-select: none;\n  width: ", ";\n\n  &:hover {\n    border-color: ", ";\n  }\n\n  ", ";\n\n  ", "\n"])), function (props) {
  return props.theme.buttonCircle.dimensions;
}, function (props) {
  return props.theme.buttonCircle.dimensions;
}, function (props) {
  return props.theme.colors.tertiaryDark;
}, function (props) {
  return props.active ? ActiveCSS : '';
}, CommonDisabledCSS);
Wrapper$1.defaultProps = {
  active: false
};
var ButtonCircle = function ButtonCircle(props) {
  var children = props.children,
      restProps = _objectWithoutPropertiesLoose(props, ["children"]);

  return React__default.createElement(Wrapper$1, Object.assign({}, restProps), children);
};

var IconClose = function IconClose() {
  return React__default.createElement("svg", {
    fill: "none",
    height: "14",
    viewBox: "0 0 24 24",
    width: "14",
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default.createElement("path", {
    d: "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z",
    fill: "#37474F"
  }));
};

var _templateObject$5, _templateObject2$3;
var ModalTitleWrapper = styled__default.div(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteralLoose(["\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  padding: 0 11px 0 24px;\n  height: 68px;\n  flex-direction: row;\n"])));
var ModalTitleText = styled__default.h2(_templateObject2$3 || (_templateObject2$3 = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  font-family: ", ";\n  font-size: 17px;\n  font-weight: 500;\n  line-height: 1.2;\n  margin: 0 auto 0 0;\n  overflow: hidden;\n  text-align: left;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"])), function (props) {
  return props.theme.colors.textColorDark;
}, function (props) {
  return props.theme.fonts.fontFamily;
});

var ModalTitle = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ModalTitle, _React$Component);

  function ModalTitle() {
    var _this;

    _this = _React$Component.apply(this, arguments) || this;

    _this.render = function () {
      var _this$props = _this.props,
          _this$props$disableCl = _this$props.disableCloseButton,
          disableCloseButton = _this$props$disableCl === void 0 ? false : _this$props$disableCl,
          onClick = _this$props.onClick,
          title = _this$props.title,
          restProps = _objectWithoutPropertiesLoose(_this$props, ["disableCloseButton", "onClick", "title"]);

      return React__default.createElement(ModalTitleWrapper, Object.assign({}, restProps), React__default.createElement(ModalTitleText, null, title), React__default.createElement(ButtonCircle, {
        disabled: disableCloseButton,
        onClick: onClick
      }, React__default.createElement(IconClose, null)));
    };

    return _this;
  }

  return ModalTitle;
}(React__default.Component);

var ModalContainer = function ModalContainer(props) {
  var children = props.children,
      disableCloseButton = props.disableCloseButton,
      onRequestClose = props.onRequestClose,
      theme = props.theme,
      title = props.title,
      restProps = _objectWithoutPropertiesLoose(props, ["children", "disableCloseButton", "onRequestClose", "theme", "title"]);

  var modalStyle = theme.modalStyle;
  React__default.useEffect(function () {
    Modal.setAppElement('#root');
  }, []);
  return React__default.createElement(Modal, Object.assign({
    onRequestClose: onRequestClose,
    shouldCloseOnOverlayClick: true,
    style: modalStyle
  }, restProps), title ? React__default.createElement(ModalTitle, {
    disableCloseButton: disableCloseButton,
    onClick: onRequestClose,
    title: title
  }) : null, children);
};

var ModalWrapper = styled.withTheme(ModalContainer);

var theme = {
  fonts: {
    defaultSize: '14px',
    defaultLineHeight: '16px',
    fontFamily: "'Roboto', 'Helvetica Neue', 'Arial', 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', '-apple-system', 'BlinkMacSystemFont', sans-serif",
    fontFamilyCode: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace"
  },
  buttonPrimary: {
    backgroundColor: '#5C6BC0',
    backgroundColorDisabled: '#5C6BC0',
    borderColor: '#5C6BC0',
    borderColorDisabled: '#5C6BC0',
    backgroundColorHover: '#3F51B5',
    borderColorHover: '#3F51B5',
    color: '#fff',
    colorDisabled: '#fff',
    colorHover: '#fff'
  },
  buttonPrimaryLine: {
    backgroundColor: '#fff',
    backgroundColorDisabled: '#fff',
    backgroundColorHover: '#fff',
    borderColor: '#DCDFF2',
    borderColorDisabled: '#E8EAF6',
    borderColorHover: '#C5CAE9',
    color: '#37474F',
    colorDisabled: '#757575',
    colorHover: '#37474F'
  },
  buttonSecondary: {
    backgroundColor: '#E8EAF6',
    backgroundColorDisabled: '#E8EAF6',
    backgroundColorHover: '#E8EAF6',
    borderColor: '#E8EAF6',
    borderColorDisabled: '#E8EAF6',
    borderColorHover: '#E8EAF6',
    color: '#3F51B5',
    colorDisabled: '#3F51B5',
    colorHover: '#3F51B5',
    weight: '500'
  },
  buttonSecondaryLine: {
    backgroundColor: '#fff',
    backgroundColorDisabled: '#fff',
    backgroundColorHover: '#fff',
    borderColor: '#DCDFF2',
    borderColorDisabled: '#DCDFF2',
    borderColorHover: '#C5CAE9',
    color: '#37474F',
    colorDisabled: '#757575',
    colorHover: '#37474F'
  },
  dropdown: {
    buttonBackgroundColor: '#fff',
    buttonBackgroundColorHover: '#fff',
    buttonBorderColor: '#DCDFF2',
    buttonBorderColorHover: '#C5CAE9',
    buttonBorderColorActive: '#9FA8DA',
    buttonColor: '#37474F',
    buttonColorHover: '#37474F',
    dropdownItems: {
      backgroundColor: '#fff',
      borderColor: '#E8EAF6',
      borderRadius: '12px',
      boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.12)',
      item: {
        backgroundColor: 'transparent',
        backgroundColorActive: '#F8F9FC',
        backgroundColorHover: '#F8F9FC',
        color: '#37474F'
      }
    }
  },
  buttonCircle: {
    dimensions: '40px'
  },
  buttonRound: {
    borderRadius: '8px',
    fontSize: '14px',
    height: '40px',
    lineHeight: '16px',
    padding: '12px 17px'
  },
  colors: {
    activeListItemBackground: '#fafafa',
    alert: '#E57373',
    alertHover: '#EF5350',
    borderColorDark: '#9FA8DA',
    darkGray: '#acacac',
    error: '#fa0000',
    gray: '#b7b7b7',
    green: '#4B9E98',
    mainBodyBackground: '#fff',
    primary: '#3F51B5',
    primaryLight: '#5C6BC0',
    hyperlink: '#1E88E5',
    secondary: '#EDEFF8',
    tertiary: '#DCDFF2',
    tertiaryDark: '#C5CAE9',
    textColor: '#757575',
    textColorDark: '#000629',
    textColorDarker: '#333',
    textColorLight: '#999',
    textColorLighter: '#86909E',
    textColorLightish: '#7D8189',
    verticalDivider: '#e8eaf6',
    clickable: '#7986CB',
    red: '#E57373'
  },
  message: {
    colors: {
      error: '#ff7848',
      "default": '#ECEFF1',
      ok: '#00bc93',
      warning: '#f5e148'
    }
  },
  cards: {
    backgroundColor: '#fff',
    border: '1px solid #EEE',
    borderRadius: '8px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
    paddingHorizontal: '24px',
    paddingVertical: '20px',
    textColor: '#000',
    textColorSecondary: '#333',
    titleColor: '#000'
  },
  header: {
    backgroundColor: '#fff',
    boxShadow: 'none',
    height: '66px',
    color: '#37474F'
  },
  themeBreakPoints: {
    lg: '992px',
    md: '768px',
    sm: '480px',
    xl: '1024px',
    xs: '320px',
    xxl: '1280px',
    xxxl: '1366px'
  },
  borders: {
    tooltip: '#cfd8dc',
    borderColor: '#ECEFF1',
    borderDisabled: '#E8EAF6',
    borderLineDisabled: '1px solid #E8EAF6',
    commonBorderRadius: '6px'
  },
  slider: {
    idle: '#E8EAF6',
    active: '#9FA8DA'
  },
  paddings: {
    mainPadding: '15px'
  },
  textfield: {
    backgroundColor: 'transparent',
    borderColor: '#DCDFF2',
    borderColorActive: '#9FA8DA',
    borderColorOnHover: '#C5CAE9',
    borderRadius: '8px',
    borderStyle: 'solid',
    borderWidth: '1px',
    color: '#37474F',
    fontSize: '14px',
    fontWeight: '500',
    height: '40px',
    outline: 'none',
    paddingHorizontal: '20px',
    paddingVertical: '12px',
    placeholderColor: '#86909E',
    placeholderFontSize: '14px',
    placeholderFontWeight: '400'
  },
  mainContainer: {
    maxWidth: '586px'
  },
  moreMenu: {
    buttonBorder: '#DCDFF2',
    buttonBorderHover: '#C5CAE9',
    buttonBorderActive: '#9FA8DA',
    boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.12)',
    items: {
      border: '#E8EAF6',
      backgroundColor: '#FFF'
    },
    item: {
      backgroundColor: 'transparent',
      backgroundColorActive: '#F8F9FC',
      backgroundColorHover: '#F8F9FC',
      color: '#757575',
      colorHover: '#37474F'
    }
  },
  form: {
    common: {
      disabled: {
        backgroundColor: '#fff',
        borderColor: '#E8EAF6',
        color: '#757575'
      }
    }
  },
  outcomes: {
    colors: [{
      darker: '#8E24AA',
      medium: '#e1bee7'
    }, {
      darker: '#00897B',
      medium: '#b2dfdb'
    }, {
      darker: '#d2b994',
      medium: '#ffe0b2'
    }, {
      darker: '#b9b992',
      medium: '#e7e7be'
    }, {
      darker: '#9db992',
      medium: '#bedfb2'
    }, {
      darker: '#ca89bd',
      medium: '#ffb2f0'
    }, {
      darker: '#cc9c9c',
      medium: '#e7bebe'
    }, {
      darker: '#9ebd91',
      medium: '#bfdfb2'
    }, {
      darker: '#af7171',
      medium: '#ffb2b2'
    }, {
      darker: '#6d9677',
      medium: '#90bb9b'
    }, {
      darker: '#7b91a9',
      medium: '#b2c8df'
    }, {
      darker: '#a980c3',
      medium: '#e1b2ff'
    }, {
      darker: '#b18bac',
      medium: '#e7bee2'
    }, {
      darker: '#484343',
      medium: '#757575'
    }, {
      darker: '#b38037',
      medium: '#f0ad4e'
    }, {
      darker: '#acb8c1',
      medium: '#e3f2fd'
    }, {
      darker: '#679053',
      medium: '#8dc572'
    }, {
      darker: '#131a1d',
      medium: '#37474f'
    }, {
      darker: '#17486f',
      medium: '#216ba5'
    }, {
      darker: '#7e97ad',
      medium: '#bbdefb'
    }, {
      darker: '#879caf',
      medium: '#d6ebfd'
    }, {
      darker: '#265986',
      medium: '#337ab7'
    }, {
      darker: '#0e488a',
      medium: '#1565c0'
    }, {
      darker: '#4d535d',
      medium: '#86909e'
    }, {
      darker: '#6b3838',
      medium: '#be6464'
    }, {
      darker: '#313f46',
      medium: '#607d8b'
    }, {
      darker: '#464646',
      medium: '#9e9e9e'
    }, {
      darker: '#3c2922',
      medium: '#795548'
    }, {
      darker: '#a03716',
      medium: '#ff5722'
    }, {
      darker: '#c17300',
      medium: '#ff9800'
    }, {
      darker: '#b1a325',
      medium: '#ffeb3b'
    }, {
      darker: '#a51546',
      medium: '#e91e63'
    }]
  },
  modalStyle: {
    content: {
      backgroundColor: '#fff',
      borderColor: '#ECEFF1',
      borderStyle: 'solid',
      borderWidth: '1px',
      bottom: 'auto',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
      display: 'flex',
      flexDirection: 'column',
      flexGrow: '0',
      height: 'fit-content',
      left: 'auto',
      margin: 'auto 0',
      overflow: 'hidden',
      position: 'relative',
      right: 'auto',
      top: 'auto',
      width: '355px',
      padding: '0 !important'
    },
    overlay: {
      alignItems: 'unset',
      backgroundColor: 'rgba(0, 0, 0, 0.06)',
      display: 'flex',
      justifyContent: 'center',
      overflow: 'auto',
      padding: '10px',
      zIndex: '12345'
    }
  },
  switchNetworkModal: {
    backgroundColor: 'rgba(0, 0, 0, 0.06)',
    modalColor: '#fff',
    borderColor: '#ECEFF1',
    boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.12)',
    primaryTextColor: '#37474F',
    secondaryTextColor: '#757575',
    linkTextColor: '#7986CB',
    connectionBall: '#55AC68',
    primaryFontSize: '16px',
    secondaryFontSize: '14px'
  },
  progressBar: {
    open: '#7986CB',
    finalizing: '#9575CD',
    arbitration: '#BA68C8',
    closed: '#BA68C8'
  },
  scale: {
    bar: '#e8eaf6',
    box: '#e8eaf6',
    ballBorder: '#7986cb',
    ballBackground: '#fff',
    border: '#E8EAF6',
    positive: '#80CBC4',
    negative: '#EF9A9A',
    neutral: '#86909E',
    positiveText: '#4B9E98',
    negativeText: '#EF5350'
  }
};

var _templateObject$6, _templateObject2$4, _templateObject3$1, _templateObject4$1, _templateObject5$1, _templateObject6$1, _templateObject7, _templateObject8;
var ContentWrapper = styled__default.div(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteralLoose(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"])));
var Buttons = styled__default.div(_templateObject2$4 || (_templateObject2$4 = _taggedTemplateLiteralLoose(["\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  height: 160px;\n  border: 1px dashed #DDDDE3;\n  border-width: 1px 0 0 0;\n\n  &:last-child {\n    margin-top: 0;\n  }\n"])));
var SpinnerContainer = styled__default.div(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteralLoose(["\n  width: 378px;\n  height: 228px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])));
var ButtonStyled = styled__default(Button)(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteralLoose(["\n  margin-bottom: 14px;\n  width: 330px;\n  height: 48px;\n  border: 1px solid #DDDDE3;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 16px;\n\n  &[disabled] {\n    cursor: not-allowed;\n    opacity: 0.6;\n  }\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n"])));
var Icon = styled__default.img(_templateObject5$1 || (_templateObject5$1 = _taggedTemplateLiteralLoose(["\n  height: 20px;\n  margin: 0;\n  width: 20px;\n"])));
var CurrentIcon = styled__default.img(_templateObject6$1 || (_templateObject6$1 = _taggedTemplateLiteralLoose(["\n  height: 45px;\n  margin: 0;\n  width: 45px;\n"])));
var Text = styled__default.span(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 150%;\n  margin: 0;\n"])), function (props) {
  return props.theme.colors.textColorDark;
});
var ConnectingText = styled__default.p(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n  color: black;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 19px;\n  text-align: center;\n  margin: 24px 0;\n  text-align: center;\n"])));

var ConnectButton = function ConnectButton(props) {
  var disabled = props.disabled,
      icon = props.icon,
      onClick = props.onClick,
      text = props.text;
  return React__default.createElement(ButtonStyled, {
    buttonType: ButtonType.secondaryLine,
    disabled: disabled,
    onClick: onClick
  }, React__default.createElement(Text, null, text), icon);
};

var WalletConnector = function WalletConnector(props) {
  var wallet = useWallet.useWallet();

  var _useState = React.useState(false),
      connectingToWalletConnect = _useState[0],
      setConnectingToWalletConnect = _useState[1];

  var _useState2 = React.useState(false),
      connectingToMetamask = _useState2[0],
      setConnectingToMetamask = _useState2[1];

  var _useState3 = React.useState(false),
      connectingToAuthereum = _useState3[0],
      setConnectingToAuthereum = _useState3[1];

  var isOpen = props.isOpen,
      onClose = props.onClose;
  var isMetamaskEnabled = 'ethereum' in window || 'web3' in window;

  var onConnect = function onConnect(ethereum) {
    try {
      window.provider = new ethers.providers.Web3Provider(ethereum);
      return Promise.resolve(window.provider.listAccounts()).then(function (accounts) {
        var _exit = false;

        function _temp2(_result2) {
          return _exit ? _result2 : accounts.length ? accounts[0].toLowerCase() : null;
        }

        var _temp = function () {
          if (!accounts.length) {
            return _catch(function () {
              return Promise.resolve(window.ethereum.enable()).then(function () {
                return Promise.resolve(window.provider.listAccounts()).then(function (_window$provider$list) {
                  accounts = _window$provider$list;
                });
              });
            }, function () {
              _exit = true;
              return null;
            });
          }
        }();

        return _temp && _temp.then ? _temp.then(_temp2) : _temp2(_temp);
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  var connectMetamask = function connectMetamask() {
    try {
      setConnectingToMetamask(true);

      var _temp4 = _catch(function () {
        return Promise.resolve(wallet.connect("injected")).then(function () {
          setConnectingToMetamask(false);
        });
      }, function () {
        setConnectingToMetamask(false);
      });

      return Promise.resolve(_temp4 && _temp4.then ? _temp4.then(function () {}) : void 0);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  var connectWalletConnect = function connectWalletConnect() {
    try {
      setConnectingToWalletConnect(true);

      var _temp6 = _catch(function () {
        return Promise.resolve(wallet.connect("walletconnect")).then(function () {
          setConnectingToWalletConnect(false);
        });
      }, function () {
        setConnectingToWalletConnect(false);
      });

      return Promise.resolve(_temp6 && _temp6.then ? _temp6.then(function () {}) : void 0);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  var resetEverything = React.useCallback(function () {
    setConnectingToWalletConnect(false);
    setConnectingToMetamask(false);
    setConnectingToAuthereum(false);
  }, []);
  var onClickCloseButton = React.useCallback(function () {
    resetEverything();
    onClose();
  }, [onClose, resetEverything]);
  React.useEffect(function () {
    if (wallet.account && wallet.ethereum) {
      onConnect(wallet.ethereum);
      onClose && onClose();
    }
  }, [wallet, onClose]);
  var isConnectingToWallet = connectingToMetamask || connectingToWalletConnect || connectingToAuthereum;
  var connectingText = "Connect MetaMask to Mesa";

  if (connectingToWalletConnect) {
    connectingText = 'Connect Wallet to Mesa';
  }

  var disableMetamask = !isMetamaskEnabled || false;
  var disableWalletConnect = false;
  return React__default.createElement(styled.ThemeProvider, {
    theme: theme
  }, React__default.createElement(React.Fragment, null, React__default.createElement(ModalWrapper, {
    isOpen: !wallet.account && isOpen,
    onRequestClose: onClickCloseButton,
    shouldCloseOnOverlayClick: !isConnectingToWallet,
    title: isConnectingToWallet ? undefined : 'Connect to a Wallet'
  }, React__default.createElement(ContentWrapper, null, isConnectingToWallet ? React__default.createElement(React.Fragment, null, React__default.createElement(SpinnerContainer, null, connectingToMetamask && React__default.createElement(CurrentIcon, {
    alt: "",
    src: props.metamaskImage
  }), connectingToWalletConnect && React__default.createElement(CurrentIcon, {
    alt: "",
    src: props.walletImage
  }), React__default.createElement(ConnectingText, null, connectingText), React__default.createElement(Spinner, null))) : React__default.createElement(React.Fragment, null, React__default.createElement(Buttons, null, React__default.createElement(ConnectButton, {
    disabled: disableMetamask,
    icon: React__default.createElement(Icon, {
      alt: "",
      src: props.metamaskImage
    }),
    onClick: connectMetamask,
    text: "Metamask"
  }), React__default.createElement(ConnectButton, {
    disabled: disableWalletConnect,
    icon: React__default.createElement(Icon, {
      alt: "",
      src: props.walletImage
    }),
    onClick: connectWalletConnect,
    text: "Wallet Connect"
  })))))));
};

exports.WalletConnector = WalletConnector;
exports.default = WalletConnector;
//# sourceMappingURL=index.js.map
