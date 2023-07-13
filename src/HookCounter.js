import React, { Component } from "react";
import { render } from "react-dom";

class HookCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: ""
    };
    this.handler = this.handler.bind(this);
    this.Submit = this.Submit.bind(this);
  }
  handler = (e) => {
    this.setState({
      text: e.target.value
    });
  };
  Submit = (e) => {
    e.preventDefault();
    if (this.state.text.length === 0) {
      console.log("Nothing Entered");
    } else {
      const values = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState((state) => ({
        items: state.items.concat(values),
        text: ""
      }));
    }
  };
  render() {
    return (
      <div>
        <TodoList items={this.state.items} />
        <h3>Todo List</h3>
        <input type="text" onChange={this.handler} value={this.state.Text} />
        <button onClick={this.Submit}>Add {this.state.items.length + 1}</button>
      </div>
    );
  }
}

class TodoList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.items.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default HookCounter;
