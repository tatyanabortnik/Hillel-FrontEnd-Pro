import { Component } from "react";
import "./style.sass";

export default class Table extends Component {
   constructor(props) {
      super(props);

      this.state = Object.assign({}, this.props); // {[...],[...]}
      this.state.indexList = this.state.list.map((item, index) => index);

      let chooseItem = setInterval(() => {
         const randomIndex =
            this.state.indexList[
               Math.floor(Math.random() * this.state.indexList.length)
            ]; //get random el from indexList
         console.log(randomIndex);

         this.setState(
            {
               list: this.state.list.map((item, index) => {
                  if (index === randomIndex){
                     item.checked = true;
                     Object.defineProperty(item, "checked", {enumerable: false});
                  } 
                  return item;
               }),
               indexList: this.state.indexList.filter(
                  (item) => item !== randomIndex
               ),
            },
            () => {
               if (
                  this.state.indexList.length ===
                  Math.floor(this.state.list.length / 2)
               ) {
                  this.setState({
                     outlineWidth: "10px",
                  });
               }

               if (!this.state.indexList.length) {
                  clearInterval(chooseItem);
                  this.setState({
                     outlineWidth: "20px",
                  });
               }
            }
         );
      }, 2000);
   }

   render() {
      let { list, outlineWidth } = this.state;

      return (
         <table style={{ outlineWidth }}>
            <thead>
               <tr>
                  <th>Type</th>
                  <th>Icon</th>
               </tr>
            </thead>
            <tbody>
               {list.map((item, index) => (
                  <tr key={index} className={item.checked ? "checked" : null}>
                     {Object.keys(item).map((k, i) => {
                        // return k !== "checked" ? (
                           return <td key={i} title={item[k]}>{item[k]}</td>
                        // ) : null;
                     })}
                  </tr>
               ))}
            </tbody>
         </table>
      );
   }
}
