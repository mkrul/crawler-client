import React, { Component } from 'react'
import { Container, Header, Form, Button, Segment, Icon } from 'semantic-ui-react'
import apis from '../api'

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: ''
    }
  }

  validateEmail(email) {
    var re = /^\w+([\.-]?\w+)*@(\w+([\.-]?\w+))?(waketech|my.waketech)\.edu$/

    return re.test(email)
  }

  handleChangeInputEmail = async event => {
    const email = event.target.value
    this.setState({ email })
  }

  handleAddEmail = async() => {
    const { email } = this.state
    const payload = { email }

    if (this.validateEmail(payload.email)) {
      await apis.insertEmail(payload).then(res => {
        window.alert('Email inserted successfully')
      })
    } else {
      window.alert('Must be a valid email address')
    }

    this.setState({ email: '' })
  }

  render() {
    const { email } = this.state
    const mainContainer = {
      margin: '0 auto',
      marginTop: '50px',
    }
    const emailForm = {
      margin: '0 auto',
      marginTop: '40px',
      width: '300px'
    }

    return (
      <div style={mainContainer}>
        <Container textAlign="center">
          <Header textAlign="center" as="h1">
            Welcome!
          </Header>
          <p>
            To subscribe to the off-market real estate mailing list, enter your 
            Wake Tech email address and click "Submit".
          </p>
          <p>
            <b>Note: </b>Only valid Wake Tech email addresses are being accepted 
            at this time.
          </p>
          <Form>
            <div style={emailForm}>
              <Segment placeholder>
                <Header icon>
                  <Icon name="mail" />
                  Enter Your Email Address
                </Header>
                <Form.Field>
                  <input 
                    type="text"
                    value={email}
                    onChange={this.handleChangeInputEmail}
                    placeholder="Email"
                  />
                </Form.Field>
                <Button type="submit" onClick={this.handleAddEmail}>Submit</Button>
              </Segment>
            </div>
          </Form>
        </Container>
      </div>
    )
  }
}

export default Main
