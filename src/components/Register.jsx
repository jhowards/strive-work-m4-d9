import React, { Component } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";

class Register extends Component {
  state = {
    user: {
      firstname: "",
      surname: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    errors: {},
    isRegistered: false,
  };

  handleInput = (e, propertyName) => {
    this.setState({
      user: {
        ...this.state.user,
        [propertyName]: propertyName === "" ? "" : e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (Object.entries(this.state.errors).length < 1) {
      console.log(this.state.user);
      this.setState({ isRegistered: true });
    }
  };

  render() {
    const isRegistered = this.state.isRegistered;
    if (isRegistered) {
      return (
        <div className="Register">
          <div className="w-25">
            <h1 className="mb-5 mt-3">Registered!</h1>
            <h2>
              Name: {this.state.user.firstname} {this.state.user.surname}
            </h2>
            <h2>Email: {this.state.user.email}</h2>
            <h2>Password: {this.state.user.password}</h2>
          </div>
        </div>
      );
    } else {
      return (
        <div className="Register">
          <div className="w-25">
            <h1 className="mb-5 mt-3">Register</h1>
            <Form onSubmit={this.handleSubmit}>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label htmlFor="firstname">First Name</Form.Label>
                    <Form.Control
                      type="text"
                      id="firstname"
                      placeholder="John"
                      onChange={(e) => this.handleInput(e, "firstname")}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label htmlFor="surname">Surname</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Doe"
                      id="surname"
                      onChange={(e) => this.handleInput(e, "surname")}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label htmlFor="email">Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="johndoe@gmail.com"
                      id="email"
                      onChange={(e) => this.handleInput(e, "email")}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mt-5">
                <Col>
                  <Form.Group>
                    <Form.Label htmlFor="password">Password</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="*******"
                      id="password"
                      onChange={(e) => this.handleInput(e, "password")}
                    />
                    <span className="text-danger errortext">
                      {this.state.passwordError}
                    </span>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label htmlFor="confirmpassword">
                      Confirm Password
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="*******"
                      id="confirmpassword"
                      onChange={(e) => this.handleInput(e, "confirmpassword")}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Button
                disabled={
                  this.state.user.firstname.length < 2 ||
                  this.state.user.surname.length < 3 ||
                  this.state.user.email.length < 3 ||
                  this.state.user.password.length < 8 ||
                  this.state.user.password !== this.state.user.confirmpassword
                }
                size="lg"
                type="submit"
                variant="success"
              >
                Submit
              </Button>
            </Form>
          </div>
        </div>
      );
    }
  }
}

export default Register;
