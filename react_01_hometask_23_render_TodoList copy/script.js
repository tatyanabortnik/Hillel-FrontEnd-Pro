var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var domContainer = document.querySelector("#root");
var root = ReactDOM.createRoot(domContainer);

var todoList = [{
   userId: 1,
   id: 1,
   title: "delectus aut autem",
   completed: true
}, {
   userId: 1,
   id: 2,
   title: "quis ut nam facilis et officia qui",
   completed: true
}, {
   userId: 1,
   id: 3,
   title: "fugiat veniam minus",
   completed: false
}, {
   userId: 1,
   id: 4,
   title: "et porro tempora",
   completed: false
}, {
   userId: 1,
   id: 5,
   title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
   completed: false
}];

var TodoList = function (_React$Component) {
   _inherits(TodoList, _React$Component);

   function TodoList() {
      _classCallCheck(this, TodoList);

      return _possibleConstructorReturn(this, (TodoList.__proto__ || Object.getPrototypeOf(TodoList)).apply(this, arguments));
   }

   _createClass(TodoList, [{
      key: "render",
      value: function render() {
         var _props$array = this.props.array,
             array = _props$array === undefined ? [] : _props$array;

         console.log(array);

         return React.createElement(
            "section",
            { className: "todolist" },
            React.createElement(Heading, null),
            React.createElement(List, { array: array })
         );
      }
   }]);

   return TodoList;
}(React.Component);

var Heading = function (_React$Component2) {
   _inherits(Heading, _React$Component2);

   function Heading() {
      _classCallCheck(this, Heading);

      return _possibleConstructorReturn(this, (Heading.__proto__ || Object.getPrototypeOf(Heading)).apply(this, arguments));
   }

   _createClass(Heading, [{
      key: "render",
      value: function render() {
         return React.createElement(
            "h2",
            null,
            "My To do List"
         );
      }
   }]);

   return Heading;
}(React.Component);

var List = function (_React$Component3) {
   _inherits(List, _React$Component3);

   function List() {
      _classCallCheck(this, List);

      return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
   }

   _createClass(List, [{
      key: "render",
      value: function render() {
         var _props$array2 = this.props.array,
             array = _props$array2 === undefined ? [] : _props$array2;

         console.log(array);

         return React.createElement(
            "ul",
            null,
            array.map(function (item, index) {
               return React.createElement(ListItem, { key: index, item: item });
            })
         );
      }
   }]);

   return List;
}(React.Component);

var ListItem = function (_React$Component4) {
   _inherits(ListItem, _React$Component4);

   function ListItem() {
      _classCallCheck(this, ListItem);

      return _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));
   }

   _createClass(ListItem, [{
      key: "render",
      value: function render() {
         var item = this.props.item;

         var className = item.completed ? "done" : null;
         return React.createElement(
            "li",
            { className: className },
            item.title
         );
      }
   }]);

   return ListItem;
}(React.Component);

var App = React.createElement(TodoList, { array: todoList });

root.render(App);