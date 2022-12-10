const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);

const animals = [
   { type: `turtle`, icon: `🐢` },
   { type: `octopus`, icon: `🐙` },
   { type: `fish`, icon: `🐠` },
   { type: `flamingo`, icon: `🦩` },
   { type: `penguin`, icon: `🐧` },
];

class Table extends React.Component {
   constructor(props) {
      super(props);

      console.log(this);
   }

   state = Object.assign({}, this.props);

   render() {
      let { list } = this.state;
      return (
         <table>
            <thead>
               <tr>
                  <th>Type</th>
                  <th>Icon</th>
               </tr>
            </thead>
            <tbody>
               {list.map((item, index) => (
                  <tr key={index}>
                  {Object.keys(item).map((k, i) => (
                     <td key={i}>{item[k]}</td>
                  ))}
               </tr>
               ))}
            </tbody>
         </table>
      );
   }
}

// class Tr extends React.Component {
//    // constructor(props) {
//    //    super(props);
//    // }
//    state = Object.assign({},this.props);

//    render() {
//       const {item} = this.props;

//       return (
//          <tr>
//             {Object.keys(item).map((k, i) => (
//                <td key={i}>{item[k]}</td>
//             ))}
//          </tr>
//       );
//    }
// }

