const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);

const todoList = [
   {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: true,
   },
   {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: true,
   },
   {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
   },
   {
      userId: 1,
      id: 4,
      title: "et porro tempora",
      completed: false,
   },
   {
      userId: 1,
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false,
   },
];

class TodoList extends React.Component {
   render() {
      const { array = [] } = this.props;
      console.log(array);

      return (
         <section className="todolist">
            <Heading />
            <List array={array} />
         </section>
      );
   }
}

class Heading extends React.Component {
   render() {
      return <h2>My To do List</h2>;
   }
}

class List extends React.Component {
   render() {
      const { array = [] } = this.props;
      console.log(array);

      return (
         <ul>
            {array.map((item, index) => (
               <ListItem key={index} item={item} />
            ))}
         </ul>
      );
   }
}

class ListItem extends React.Component {
   render() {
      const { item } = this.props;
      let className = item.completed ? "done" : null;
      return <li className={className}>{item.title}</li>;
   }
}

const App = <TodoList array={todoList} />;

root.render(App);
