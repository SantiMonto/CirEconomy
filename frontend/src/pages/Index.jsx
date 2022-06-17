import React from 'react'
import {Row, Button, Col} from 'react-bootstrap'

const Index = () => {
  return (
    <div>
        <h1><i class="fa-solid fa-recycle"></i>Index</h1>
        <Row className="mx-0">
  <Button as={Col} variant="primary">Button #1</Button>
  <Button as={Col} variant="secondary" className="mx-2">Button #2</Button>
  <Button as={Col} variant="success">Button #3</Button>
</Row>
    </div>
  )
}

export default Index;