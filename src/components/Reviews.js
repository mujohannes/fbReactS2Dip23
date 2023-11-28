import { useState, useEffect, useContext } from 'react'
import { FSContext } from '../contexts/FSContext'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { collection, query, onSnapshot } from 'firebase/firestore'

export function Reviews ( props ) {
  const db = useContext( FSContext )

  const[ reviews, setReviews ] = useState([])
  const[ fetching, setFetching ] = useState( true )

  useEffect( () => {
    if( fetching ) {
      const q = query( collection( db, `books/${props.bookId}/reviews`))
      const snapshot = onSnapshot( q, (snapshot) => {
        let bookReviews = []
        snapshot.forEach( (item) => {
          let r = item.data()
          r.id = item.id
          bookReviews.push(r)
        })
        setReviews( bookReviews)
        setFetching(false)
      })
    }
  })

  const ReviewItems = reviews.map( (item) => {
    return (
      <Row>
        <Col>
          <h4>{item.title}</h4>
          <p>{item.star} stars</p>
          <p>{item.body}</p>
        </Col>
      </Row>
    )
  })

  return(
    <Container>
      { ReviewItems }
    </Container>
  )
}