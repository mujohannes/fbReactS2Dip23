import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

import { ProductImage } from "../components/ProductImage"

import { useState, useEffect} from 'react'

export function Home ( props ) {
  const [ books, setBooks ] = useState([])

  useEffect( () => {
    setBooks( props.items )
    console.log("setting")
  }, [props.items])


  // collection
  const Items = books.map( (item, key) => {
    return (
      <Col md="4" key={key} className="my-2 d-flex flex-column">
        <Card className="d-flex flex-column flex-1 flex-fill position-relative">
          <ProductImage src={ item.cover_image} />
          <Card.Body>
            <Card.Title>{item.book_title}</Card.Title>
            <Card.Text>
              By {item.author}
            </Card.Text>
          </Card.Body>
          <Card.Link href={"/item/" + item.id } className="position-absolute" style={{top:0,bottom: 0, left: 0, right: 0}}></Card.Link>
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