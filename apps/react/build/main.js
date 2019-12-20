'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var ReactDOM = _interopDefault(require('react-dom'));
var styled = require('styled-components');
var styled__default = _interopDefault(styled);

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function trackEvent(data, extraData) {
    console.log('trackEvent', { data, extraData });
}

// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

function trackEvent$1(data, extraData) {
  console.log('trackEvent', {
    data: data,
    extraData: extraData
  });
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: inherit;\n  border: 0;\n  color: inherit;\n  font: inherit;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var ButtonStyled = styled__default.button(_templateObject());

function Button(_ref) {
  var label = _ref.label,
      onClick = _ref.onClick;
  React.useEffect(function () {
    trackEvent$1({
      action: 'Button initialized'
    });
  }, []);
  return React.createElement(ButtonStyled, {
    onClick: onClick
  }, label);
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  font-weight: bold;\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var Label = styled__default.span(_templateObject$1());

function App() {
  return React.createElement("div", null, React.createElement(Label, null, "Click this button:"), React.createElement(Button, {
    label: "Hi, click me"
  }));
}

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: sans-serif;\n  }\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var GlobalStyle = styled.createGlobalStyle(_templateObject$2());
trackEvent({
  action: 'Loaded'
});
ReactDOM.render(React.createElement(React.Fragment, null, React.createElement(GlobalStyle, null), React.createElement(App, null)), document.getElementById("root")); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

unregister();
