import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

import { useState, useEffect} from 'react'

export function Home ( props ) {
  const [ books, setBooks ] = useState([])

  useEffect( () => {
    setBooks( props.items )
  }, [props.items])

  const ItemImage = ( props ) => {

  }

  // collection
  const Items = books.map( (item, key) => {
    return (
      <Col md="4" key={key} className="my-2 d-flex flex-column">
        <Card className="d-flex flex-column flex-1 flex-fill">
          <Card.Body>
            <Card.Title>{item.book_title}</Card.Title>
            <Card.Text>
              By {item.author}
            </Card.Text>
            <Card.Text>
              {item.id}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    )
  })

  return (
    <Container>
      <Row>
        {Items}
      </Row>
    </Container>
  )
}