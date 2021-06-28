import { Component } from "react";

//Exvlusive for class components

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { noUserError: false };
  }
  componentDidCatch(error) {
    this.setState({ noUserError: true });
  }

  render() {
    if (this.state.noUserError) {
      return <p>There are no users!</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
