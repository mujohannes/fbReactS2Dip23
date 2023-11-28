import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ItemImage } from "../components/ItemImage"
import { ReviewForm } from "../components/ReviewForm"

export function Detail(props) {
  const [bookData, setBookData ] = useState()

  let {id} = useParams()

  useEffect( () => {
    if( !bookData ) {
      props.handler(id).then( (book) => setBookData(book) )
    }
  }, [id])

  if( bookData ) {
    return(
      <Container>
        <Row>
          <Col>
            <h1>{bookData.book_title}</h1>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <ItemImage source={bookData.cover_image} />
          </Col>
          <Col md={8}>
            <h2>More information</h2>
            <h3>Summary</h3>
            <p>{bookData.summary}</p>
            <h3>Author</h3>
            <p>{ bookData.author }</p>
            <h3>ISBN</h3>
            <p>ISBN10 {bookData.isbn10}</p>
            <p>ISBN13 {bookData.isbn13}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <ReviewForm booktitle={bookData.book_title} bookId={bookData.id} />
          </Col>
        </Row>
      </Container>
    )
  }
  else {
    return null
  }
  
}