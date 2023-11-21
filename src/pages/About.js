import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
//import data from  "/data/bookSampleData.json"

import { useState } from "react"

export function About ( props ) {
  const [stuff,setStuff] = useState([])

  const clickHandler = () => {
    fetch("/data/bookSampleData.json")
      .then( (res) => res.json() )
      .then( (data) => {
        // disable when data has been added
        props.add(data)
      } )
  }

  const Things = stuff.map((item, key) => {
    return(
      <p key={key}>Yo {item.book_title} {key}</p>
    )
  })

  return ( 
    <Container>
      <Row>
        <Col>
          <Button variant="info" onClick={clickHandler}>Batch</Button>
        </Col>
      </Row>
      <Row>
        <Col>{Things}</Col>
      </Row>
    </Container>
  )
}