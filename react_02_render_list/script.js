var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var domContainer = document.querySelector("#root");
var root = ReactDOM.createRoot(domContainer);

var animals = [{ type: "turtle", icon: "\uD83D\uDC22" }, { type: "octopus", icon: "\uD83D\uDC19" }, { type: "fish", icon: "\uD83D\uDC20" }, { type: "flamingo", icon: "\uD83E\uDDA9" }, { type: "penguin", icon: "\uD83D\uDC27" }];

var Table = function (_React$Component) {
   _inherits(Table, _React$Component);

   function Table(props) {
      _classCallCheck(this, Table);

      var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

      _this.state = Object.assign({}, _this.props);


      console.log(_this);
      return _this;
   }

   _createClass(Table, [{
      key: "render",
      value: function render() {
         var list = this.state.list;

         return React.createElement(
            "table",
            null,
            React.createElement(
               "thead",
               null,
               React.createElement(
                  "tr",
                  null,
                  React.createElement(
                     "th",
                     null,
                     "Type"
                  ),
                  React.createElement(
                     "th",
                     null,
                     "Icon"
                  )
               )
            ),
            React.createElement(
               "tbody",
               null,
               list.map(function (item, index) {
                  return React.createElement(Tr, { key: index, item: item });
               })
            )
         );
      }
   }]);

   return Table;
}(React.Component);

var Tr = function (_React$Component2) {
   _inherits(Tr, _React$Component2);

   function Tr() {
      var _ref;

      var _temp, _this2, _ret;

      _classCallCheck(this, Tr);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
         args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Tr.__proto__ || Object.getPrototypeOf(Tr)).call.apply(_ref, [this].concat(args))), _this2), _this2.state = Object.assign({}, _this2.props), _temp), _possibleConstructorReturn(_this2, _ret);
   }
   // constructor(props) {
   //    super(props);
   // }


   _createClass(Tr, [{
      key: "render",
      value: function render() {
         var item = this.props.item;


         return React.createElement(
            "tr",
            null,
            Object.keys(item).map(function (k, i) {
               return React.createElement(
                  "td",
                  { key: i },
                  item[k]
               );
            })
         );
      }
   }]);

   return Tr;
}(React.Component);

var App = function App() {
   return React.createElement(
      React.Fragment,
      null,
      React.createElement(Table, { list: animals })
   );
};

root.render(React.createElement(App, null));