import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"

export function Header(props) {
  // props.items is the value of nav state in App.js
  // create a collection of navigation items
  const Links = props.items.map((item, itemkey) => {
    return (
      <Nav.Link href={item.link} key={itemkey}> {item.label} </Nav.Link>
    )
  })
  // component for Account
  const Account = (props) => {
    if (props.user) {
      return (

        <div className="d-flex">
          <Navbar.Text>{ props.user.email }</Navbar.Text>
          <Nav.Link href="/signout">Log out</Nav.Link>
        </div>
      )
    }
    else {
      return null
    }
  }

  return (
    <Navbar className="mb-3">
      <Container>
        <Navbar.Brand>App</Navbar.Brand>
        <Nav>
          {Links}
        </Nav>
      </Container>
    </Navbar>
  )
}