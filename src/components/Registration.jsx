import { Component } from "react";
import Form from "react-bootstrap/Form" 
import Button from "react-bootstrap/Button"


class Registration extends Component {

    state = {
        registration: {
        name: '',
        surname: '',
        email: '',
        password: '',
        confirmPassword: '',
        },
        showComplete: false
    }
    
    render() {
        return (
            <>
            <h1>PLEASE FILL IN THE FORM</h1>
            <Form>
            <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Insert name" />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Surname</Form.Label>
                  <Form.Control type="text" placeholder="Insert surname" />
                </Form.Group>


                <Form.Group>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Repeat Password</Form.Label>
                  <Form.Control type="password" placeholder="Repeat Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
            </Form>
            </>
        )
    }
}

export default Registration