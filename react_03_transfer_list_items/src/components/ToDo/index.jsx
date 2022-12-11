import React, { Component } from "react";
import List from './../List';
import './style.sass'


export default class ToDo extends Component {
   constructor(props) {
      super(props);

      this.transferToSecond = this.transferToSecond.bind(this);
      this.transferToFirst = this.transferToFirst.bind(this);
      this.transferToThird = this.transferToThird.bind(this);
      this.removeLastItem = this.removeLastItem.bind(this);
   }

   state = {
      firstList: this.props.list,
      secondList: [],
      thirdList: [],
   };

   transferToSecond() {
      this.setState({
         secondList: [this.state.firstList[0], ...this.state.secondList],
         firstList: this.state.firstList.filter((item,index) => index !== 0),
      })
   }

   transferToFirst() {
      this.setState({
         firstList: [this.state.secondList[0], ...this.state.firstList], 
         secondList: this.state.secondList.filter((item,index) => index !== 0),
      })
   }

   transferToThird() {
      this.setState({
         thirdList: [this.state.secondList[0], ...this.state.thirdList], 
         secondList: this.state.secondList.filter((item,index) => index !== 0),
      })
   }

   removeLastItem() {
      this.setState({
         thirdList: this.state.thirdList.slice(0,-1) 
      })
   }

   render() {
      const { firstList, secondList, thirdList } = this.state;

      return (
         <section>
            <List
               list={firstList}
               actions={[
                  {
                     text: "Transfer first to right",
                     action: this.transferToSecond,
                  },
               ]}
            />
            <List
               list={secondList}
               actions={[
                  {
                     text: "Transfer first to left",
                     action: this.transferToFirst,
                  },
                  {
                     text: "Transfer first to right",
                     action: this.transferToThird,
                  },
               ]}
            />
            <List
               list={thirdList}
               actions={[
                  { text: "Remove last item", action: this.removeLastItem },
               ]}
            />
         </section>
      );
   }
}
