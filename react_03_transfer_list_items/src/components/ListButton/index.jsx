import React, { Component } from "react";
import "./style.sass";

export default class ListButton extends Component {
   render() {
      const { actions } = this.props;

      return (
         <div className="btnBlock">
            {actions.map((item, index) => (
               <button key={index} onClick={item.action}>
                  {item.text}
               </button>
            ))}
         </div>
      );
   }
}
