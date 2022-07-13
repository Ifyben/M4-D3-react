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

    handleInput = (key, value) => {
        this.setState({
            registration: {
                ...this.state.registration, 
                [key]: value
            }
        })
    }

    isButtonClickable = () => {
        let isClickable = false
        if(this.state.registration.name.length >= 2 &&
           this.state.registration.surname.length >= 3 &&
           this.state.registration.password.length >= 8 &&
           // the regular expression for checking if something has a letter and a digit: /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/
           this.state.registration.password.match(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/) &&
           this.state.registration.confirmPassword === this.state.registration.password
            ) {
            isClickable = true
        } 
        return isClickable
    }
    
    handleRegistration = (e) => {
        e.preventDefault() 
        this.setState({
            showComplete: true    
        })
    }

    render() {
        return (
            <>
                {
                    this.state.showComplete ? (
                        <>
                        <div>WELL DONE, THE FORM HAS BEEN SUBMITTED SUCCESSFULLY. HERE IS YOUR RECAP:</div>
                        <p>{this.state.registration.name}</p>
                        <p>{this.state.registration.surname}</p>
                        <p>{this.state.registration.email}</p>
                        </>
                    ) : (
                        <>

                            <h1>PLEASE FILL IN THE FORM</h1>
                            <Form onSubmit={this.handleRegistration}>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Insert name" required onChange={(e) => this.handleInput('name', e.target.value)} value={this.state.registration.name} />
                                </Form.Group>

                                <Form.Group>
                                <Form.Label>Surname</Form.Label>
                                <Form.Control type="text" placeholder="Insert surname" required onChange={(e) => this.handleInput('surname', e.target.value)} value={this.state.registration.surname} />
                                </Form.Group>


                                <Form.Group>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" required onChange={(e) => this.handleInput('email', e.target.value)} value={this.state.registration.email} />
                                </Form.Group>

                                <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" required onChange={(e) => this.handleInput('password', e.target.value)} value={this.state.registration.password} />
                                </Form.Group>

                                <Form.Group>
                                <Form.Label>Repeat Password</Form.Label>
                                <Form.Control type="password" placeholder="Repeat Password" required onChange={(e) => this.handleInput('confirmPassword', e.target.value)} value={this.state.registration.confirmPassword} />
                                </Form.Group>
                                <Button variant="primary" type="submit" disabled={!this.isButtonClickable()} >
                                 Submit
                                </Button>
                            </Form>
                        </>
                    )
                }
            </>
        )
    }
}

export default Registration