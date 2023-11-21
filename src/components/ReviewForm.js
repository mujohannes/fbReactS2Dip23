import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

import { AuthContext } from "../contexts/AuthContext"
import { useContext, useState } from "react"

export function ReviewForm(props) {
  const auth = useContext(AuthContext)
  const[ star, setStar ] = useState(5)
  const[title, setTitle] = useState()
  const[review, setReview] = useState()

  const submitHandler = (event) => {
    event.preventDefault()
  }

  if( auth ) {
    return (
      <Form onSubmit={submitHandler}>
        <h3>Review {props.booktitle}</h3>
        <Form.Group>
          <Form.Label>Star</Form.Label>
          <Form.Select name="star" value={star} onChange={(evt) => setStar(evt.target.value) }>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
          <Form.Text>You have given {star} star(s)</Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="I love this book" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Review</Form.Label>
          <Form.Control as="textarea" rows={4} cols={30} placeholder="I could not put this down!" />
        </Form.Group>
        <Button type="submit" variant="primary">Submit</Button>
      </Form>
    )    
  }
  else {
    return null
  }
}