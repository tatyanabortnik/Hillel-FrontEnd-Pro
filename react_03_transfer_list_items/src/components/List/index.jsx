import React, { Component } from "react";
import ListButton from "../ListButton";
import ListItem from "../ListItem";
import "./style.sass";

export default class List extends Component {
   render() {
      const { list, actions } = this.props;

      return (
         <ul>
            <ListItem list={list} />
            {list.length ? <ListButton actions={actions} /> : null}
         </ul>
      );
   }
}
