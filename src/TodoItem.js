import React, { Component } from 'react';

class TodoItem extends Component {
  constructor() {
    super()
    this.state = {
      editMode: false
    }
  }
  clickedEdit = e => {
    e.preventDefault();
    this.setState({ editMode: !this.state.editMode });
  }

  callUpdateAPI = (e,title) => {
      e.preventDefault();
      if (e.keyCode === 13) {
        this.props.editItem(title,this.props.item._id);
        this.clickedEdit(e);
      }
  }
  render() {
      const item = this.props.item;
      return (
        <li key={item._id}>
          {!this.state.editMode ? <span>{item.title}</span>
          :
            <input
                defaultValue={item.title}
                onKeyUp = {e => { this.callUpdateAPI(e,e.target.value) }}
            />
            }<button type='submit' onClick={this.clickedEdit}>Edit Task</button> <button type='submit' onClick={() => this.props.deleteItem(item._id)}>Delete Task</button>
        </li>
      )
    }
}

export default TodoItem