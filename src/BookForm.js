import React, { Component } from "react";
import * as actionCreators from "./store/actions/index";
import { connect } from "react-redux";
class BookForm extends Component {
  state = {
    title: "",
    color: ""
  };
  submitBook = event => {
    event.preventDefault();
    this.props.postBook(this.state, this.props.author, this.props.closeModal);
  };
  textChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    const errors = this.props.errors;
    return (
      <form onSubmit={this.submitBook}>
        {!!errors.length && (
          <div className="alert alert-danger" role="alert">
            {errors.map(error => (
              <p key={error}>{error}</p>
            ))}
          </div>
        )}
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Title</span>
          </div>
          <input
            type="text"
            className="form-control"
            name="title"
            value={this.state.title}
            onChange={this.textChangeHandler}
          />
        </div>
        {/* <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Color</span>
          </div>
          <input
            type="text"
            className="form-control"
            name="color"
            value={this.state.color}
            onChange={this.textChangeHandler}
          />
        </div> */}
        <div className="mb-2">
          <select
            className="custom-select"
            name="color"
            onChange={this.textChangeHandler}
          >
            <option selected>Choose a color..</option>
            <option value="blue">blue</option>
            <option value="white">white</option>
            <option value="green">green</option>
            <option value="red">red</option>
            <option value="black">black</option>
            <option value="yellow">yellow</option>
            <option value="purple">purple</option>
          </select>
        </div>
        <input type="submit" />
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    errors: state.rootErrors.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postBook: (book, author, closeModal) =>
      dispatch(actionCreators.postBook(book, author, closeModal)),
    resetErrors: () => dispatch(actionCreators.resetErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookForm);
