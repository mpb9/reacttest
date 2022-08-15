import "./styles.css";
import React, { Component } from "react";
import axios from "axios";

const PATH = "http://localhost/reacttest/apis/index.php";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      sent: false,
      error: null
    };
  }

  FormSubmittionHandler(event) {    
    event.preventDefault();
    console.log(this.state);

    axios({
      method: "post",
      url: `${PATH}`,
      headers: { "content-type": "application/json" },
      data: this.state
    })
      .then((result) => {
        this.setState({
          sent: result.data.sent
        });
      })
      .catch((error) => this.setState({ error: error.message }));
  }

  render() {
    return (
      <div className="App">
        <h1>Contact Me</h1>
        <div className="container">
          <form action="#">
            <label>Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name.."
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
            <br />
            <label>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
            <br />
            <label>Subject</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Enter your message.."
              value={this.state.message}
              onChange={(e) => this.setState({ message: e.target.value })}
            ></textarea>
            <input
              type="submit"
              value="Submit"
              onClick={(e) => this.FormSubmittionHandler(e)}
            />
          </form>
        </div>
      </div>
    );
  }
}
