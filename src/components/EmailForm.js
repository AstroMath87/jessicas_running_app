// this is the email form used to submit emails for subscription list
import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

const emailForm = () => { 

    const popover = (
        <Popover id="popover-basic">
          <Popover.Title as="h3">Thank you!</Popover.Title>
          <Popover.Content>
            This doesn't do anything <strong>yet</strong>, but it will. 
          </Popover.Content>
        </Popover>
      );

return (

    <Form>
        <Form.Group controlId="formBasicEmail">
        <Form.Label>Sign up for my newsletter</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
            Please?
        </Form.Text>
        </Form.Group>
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button variant="primary">Submit</Button>
        </OverlayTrigger>
    </Form>

); 

}

export default emailForm; 