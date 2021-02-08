import React__default, { useState, useCallback, useEffect, Fragment } from 'react';
import styled, { css, keyframes, withTheme } from 'styled-components';
import { useWallet } from 'use-wallet';
import { providers } from 'ethers';
import Modal from 'react-modal';

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

var PrimaryCSS = css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  & {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n  }\n\n  &[disabled],\n  &[disabled]:hover {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n    cursor: not-allowed;\n    opacity: 0.5;\n  }\n"])), function (props) {
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
var PrimaryLineCSS = css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  & {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n  }\n\n  &[disabled],\n  &[disabled]:hover {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n    cursor: not-allowed;\n    opacity: 0.5;\n  }\n"])), function (props) {
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
var PrimaryAlternativeCSS = css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\n  & {\n    border: 1px solid ", ";\n    background-color: ", ";\n    color: ", ";\n  }\n\n  &[disabled],\n  &[disabled]:hover {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n    cursor: not-allowed;\n  }\n"])), function (props) {
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
var SecondaryCSS = css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\n  & {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n    font-weight: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n  }\n\n  &[disabled],\n  &[disabled]:hover {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n    cursor: not-allowed;\n    opacity: 0.5;\n  }\n"])), function (props) {
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
var SecondaryLineCSS = css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteralLoose(["\n  & {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n  }\n\n  &[disabled],\n  &[disabled]:hover {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n    cursor: not-allowed;\n  }\n"])), function (props) {
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

var ButtonCSS = css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteralLoose(["\n  align-items: center;\n  border-radius: 8px;\n  border-style: solid;\n  border-width: 1px;\n  cursor: pointer;\n  display: flex;\n  font-size: ", ";\n  line-height: ", ";\n  font-weight: 400;\n  height: 40px;\n  justify-content: center;\n  letter-spacing: 0.2px;\n  outline: none;\n  padding: 12px 17px;\n  pointer-events: ", ";\n  text-align: center;\n  transition: all 0.15s ease-out;\n  user-select: none;\n  white-space: nowrap;\n  font-family: Roboto;\n\n  ", "\n"])), function (_ref) {
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
var Wrapper = styled.button(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteralLoose(["\n  ", "\n"])), ButtonCSS);
var Button = function Button(props) {
  var children = props.children,
      restProps = _objectWithoutPropertiesLoose(props, ["children"]);

  return React__default.createElement(Wrapper, Object.assign({}, restProps), children);
};

var Logo = "logo~bodaTAMS.svg";

var _templateObject$2, _templateObject2$1, _templateObject3$1;
var Wrapper$1 = styled.div(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteralLoose(["\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  padding-top: 20px;\n  width: 100%;\n"])));
var Text = styled.p(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1.2;\n  margin: 0 0 0 8px;\n"])), function (props) {
  return props.theme.colors.textColor;
});
var Link = styled.a(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  text-decoration: underline;\n\n  &:hover {\n    text-decoration: none;\n  }\n"])), function (props) {
  return props.theme.colors.textColorDark;
});
var MadeBy = function MadeBy() {
  return React__default.createElement(Wrapper$1, null, React__default.createElement("img", {
    alt: "",
    src: Logo
  }), React__default.createElement(Text, null, "Made by", ' ', React__default.createElement(Link, {
    href: "https://dxdao.eth.link/",
    rel: "noopener noreferrer",
    target: "_blank"
  }, "DXdao")));
};

var IconSpinner = function IconSpinner(props) {
  var _props$spinnerSize = props.spinnerSize,
      spinnerSize = _props$spinnerSize === void 0 ? '40' : _props$spinnerSize;
  return React__default.createElement("svg", {
    fill: "none",
    height: spinnerSize,
    viewBox: "0 0 40 40",
    width: spinnerSize,
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default.createElement("circle", {
    cx: "20",
    cy: "20",
    r: "19",
    stroke: "#E8EAF6",
    strokeWidth: "2"
  }), React__default.createElement("path", {
    d: "M20 39C30.4934 39 39 30.4934 39 20C39 9.50659 30.4934 1 20 1C9.50659 1 1 9.50659 1 20",
    stroke: "#3F51B5",
    strokeWidth: "2"
  }));
};

var _templateObject$3, _templateObject2$2;
var rotate = keyframes(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteralLoose(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var RotatingSpinner = styled.div(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteralLoose(["\n  animation: ", " 2s linear infinite;\n  flex-grow: 0;\n  flex-shrink: 0;\n"])), rotate);
var Spinner = function Spinner(props) {
  var big = props.big,
      _props$color = props.color,
      color = _props$color === void 0 ? '#fff' : _props$color,
      size = props.size,
      restProps = _objectWithoutPropertiesLoose(props, ["big", "color", "size"]);

  return React__default.createElement(RotatingSpinner, Object.assign({
    color: color
  }, restProps), React__default.createElement(IconSpinner, {
    spinnerSize: big ? '42' : size ? size : '40'
  }));
};

var _templateObject$4;
var CommonDisabledCSS = css(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteralLoose(["\n  &.disabled,\n  &.disabled:hover,\n  &:disabled,\n  &:disabled:hover,\n  &[disabled],\n  &[disabled]:hover {\n    background-color: ", ";\n    border-color: ", ";\n    color: ", ";\n    cursor: not-allowed !important;\n    user-select: none !important;\n\n    .chevronDown {\n      filter: invert(46%) sepia(0%) saturate(1168%) hue-rotate(183deg) brightness(99%) contrast(89%);\n    }\n  }\n"])), function (props) {
  return props.theme.form.common.disabled.backgroundColor;
}, function (props) {
  return props.theme.form.common.disabled.borderColor;
}, function (props) {
  return props.theme.form.common.disabled.color;
});

var _templateObject$5, _templateObject2$3;
var ActiveCSS = css(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteralLoose(["\n  &,\n  &:hover {\n    background-color: ", ";\n    border-color: ", ";\n\n    > svg path {\n      fill: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.colors.secondary;
}, function (props) {
  return props.theme.colors.secondary;
}, function (props) {
  return props.theme.colors.primary;
});
var Wrapper$2 = styled.button(_templateObject2$3 || (_templateObject2$3 = _taggedTemplateLiteralLoose(["\n  align-items: center;\n  background-color: #fff;\n  border-radius: 50%;\n  border: 1px solid ", ";\n  cursor: pointer;\n  display: flex;\n  flex-shrink: 0;\n  height: ", ";\n  justify-content: center;\n  outline: none;\n  padding: 0;\n  transition: border-color 0.15s linear;\n  user-select: none;\n  width: ", ";\n\n  &:hover {\n    border-color: ", ";\n  }\n\n  ", ";\n\n  ", "\n"])), function (props) {
  return props.theme.colors.tertiary;
}, function (props) {
  return props.theme.buttonCircle.dimensions;
}, function (props) {
  return props.theme.buttonCircle.dimensions;
}, function (props) {
  return props.theme.colors.tertiaryDark;
}, function (props) {
  return props.active ? ActiveCSS : '';
}, CommonDisabledCSS);
Wrapper$2.defaultProps = {
  active: false
};
var ButtonCircle = function ButtonCircle(props) {
  var children = props.children,
      restProps = _objectWithoutPropertiesLoose(props, ["children"]);

  return React__default.createElement(Wrapper$2, Object.assign({}, restProps), children);
};

var IconClose = function IconClose() {
  return React__default.createElement("svg", {
    fill: "none",
    height: "24",
    viewBox: "0 0 24 24",
    width: "24",
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default.createElement("path", {
    d: "M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z",
    fill: "#37474F"
  }));
};

var _templateObject$6, _templateObject2$4;
var ModalTitleWrapper = styled.div(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteralLoose(["\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  padding: 0;\n"])));
var ModalTitleText = styled.h2(_templateObject2$4 || (_templateObject2$4 = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  font-family: ", ";\n  font-size: 17px;\n  font-weight: 500;\n  line-height: 1.2;\n  margin: 0 auto;\n  overflow: hidden;\n  padding: 0 5px 0 ", ";\n  text-align: left;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"])), function (props) {
  return props.theme.colors.textColorDark;
}, function (props) {
  return props.theme.fonts.fontFamily;
}, function (props) {
  return props.theme.buttonCircle.dimensions;
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

var ModalWrapper = withTheme(ModalContainer);

var AuthereumSVG = "authereum~eXRPTVrU.svg";

var MetaMaskSVG = "metamask~OudDPavv.svg";

var WalletConnectSVG = "wallet_connect~TWJizOxt.svg";

var _templateObject$7, _templateObject2$5, _templateObject3$2, _templateObject4$1, _templateObject5$1, _templateObject6$1, _templateObject7, _templateObject8, _templateObject9;
var ContentWrapper = styled.div(_templateObject$7 || (_templateObject$7 = _taggedTemplateLiteralLoose(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-height: 230px;\n  padding: 15px 0 0;\n"])));
var Buttons = styled.div(_templateObject2$5 || (_templateObject2$5 = _taggedTemplateLiteralLoose(["\n  margin-top: auto;\n\n  &:last-child {\n    margin-top: 0;\n  }\n"])));
var ButtonStyled = styled(Button)(_templateObject3$2 || (_templateObject3$2 = _taggedTemplateLiteralLoose(["\n  margin-bottom: 14px;\n  width: 200px;\n\n  &[disabled] {\n    cursor: not-allowed;\n    opacity: 0.6;\n  }\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n"])));
var Icon = css(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteralLoose(["\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  background-size: contain;\n  display: block;\n  height: 22px;\n  margin: 0 15px 0 0;\n  width: 22px;\n"])));
var IconMetaMask = styled.span(_templateObject5$1 || (_templateObject5$1 = _taggedTemplateLiteralLoose(["\n  ", "\n  background-image: url('", "');\n"])), Icon, MetaMaskSVG);
var IconWalletConnect = styled.span(_templateObject6$1 || (_templateObject6$1 = _taggedTemplateLiteralLoose(["\n  ", "\n  background-image: url('", "');\n"])), Icon, WalletConnectSVG);
var IconAuthereum = styled.span(_templateObject7 || (_templateObject7 = _taggedTemplateLiteralLoose(["\n  ", "\n  background-image: url('", "');\n"])), Icon, AuthereumSVG);
var Text$1 = styled.span(_templateObject8 || (_templateObject8 = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.2;\n  margin: 0;\n"])), function (props) {
  return props.theme.colors.textColorDark;
});
var ConnectingText = styled.p(_templateObject9 || (_templateObject9 = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  font-size: 14px;\n  font-weight: normal;\n  letter-spacing: 0.4px;\n  line-height: 1.5;\n  margin: 0;\n  padding: 30px 0 0;\n  text-align: center;\n"])), function (props) {
  return props.theme.colors.textColorLighter;
});

var ConnectButton = function ConnectButton(props) {
  var disabled = props.disabled,
      icon = props.icon,
      onClick = props.onClick,
      text = props.text;
  return React__default.createElement(ButtonStyled, {
    buttonType: ButtonType.secondaryLine,
    disabled: disabled,
    onClick: onClick
  }, icon, React__default.createElement(Text$1, null, text));
};

var WalletConnector = function WalletConnector(props) {
  var wallet = useWallet();

  var _useState = useState(false),
      connectingToWalletConnect = _useState[0],
      setConnectingToWalletConnect = _useState[1];

  var _useState2 = useState(false),
      connectingToMetamask = _useState2[0],
      setConnectingToMetamask = _useState2[1];

  var _useState3 = useState(false),
      connectingToAuthereum = _useState3[0],
      setConnectingToAuthereum = _useState3[1];

  var isOpen = props.isOpen,
      onClose = props.onClose;
  var isMetamaskEnabled = 'ethereum' in window || 'web3' in window;

  var onConnect = function onConnect(ethereum) {
    try {
      window.provider = new providers.Web3Provider(ethereum);
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
    wallet.connect("injected");
  };

  var connectWalletConnect = function connectWalletConnect() {
    wallet.connect("walletconnect");
  };

  var connectCoinbase = function connectCoinbase() {
    wallet.connect("walletlink");
  };

  var resetEverything = useCallback(function () {
    setConnectingToWalletConnect(false);
    setConnectingToMetamask(false);
    setConnectingToAuthereum(false);
  }, []);
  var onClickCloseButton = useCallback(function () {
    resetEverything();
    onClose();
  }, [onClose, resetEverything]);
  useEffect(function () {
    if (wallet.account) {
      onConnect(wallet);
      onClose && onClose();
    }
  }, [wallet, onClose]);
  var isConnectingToWallet = connectingToMetamask || connectingToWalletConnect || connectingToAuthereum;
  var connectingText = "Connecting to wallet";

  if (connectingToMetamask) {
    connectingText = 'Waiting for Approval on Metamask';
  }

  if (connectingToWalletConnect) {
    connectingText = 'Opening QR for Wallet Connect';
  }

  var disableMetamask = !isMetamaskEnabled || false;
  var disableWalletConnect = false;
  var disableAuthereum = false;
  return React__default.createElement(Fragment, null, React__default.createElement(ModalWrapper, {
    isOpen: !wallet.account && isOpen,
    onRequestClose: onClickCloseButton,
    shouldCloseOnOverlayClick: !isConnectingToWallet,
    title: connectingToMetamask ? 'Connecting...' : 'Connect a Wallet'
  }, React__default.createElement(ContentWrapper, null, isConnectingToWallet ? React__default.createElement(Fragment, null, React__default.createElement(Spinner, null), React__default.createElement(ConnectingText, null, connectingText)) : React__default.createElement(Fragment, null, React__default.createElement(Buttons, null, React__default.createElement(ConnectButton, {
    disabled: disableMetamask,
    icon: React__default.createElement(IconMetaMask, null),
    onClick: connectMetamask,
    text: "Metamask"
  }), React__default.createElement(ConnectButton, {
    disabled: disableWalletConnect,
    icon: React__default.createElement(IconWalletConnect, null),
    onClick: connectWalletConnect,
    text: "Wallet Connect"
  }), React__default.createElement(ConnectButton, {
    disabled: disableAuthereum,
    icon: React__default.createElement(IconAuthereum, null),
    onClick: connectCoinbase,
    text: "Authereum"
  })))), React__default.createElement(MadeBy, null)));
};

export default WalletConnector;
export { WalletConnector };
//# sourceMappingURL=index.modern.js.map