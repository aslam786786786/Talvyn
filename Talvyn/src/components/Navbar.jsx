import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import '../styles/navbar.css'; // import custom CSS
function Navbar() {
  return (
    <ButtonGroup aria-label="Basic example">
      <Button className="custom-btn">Home</Button>
      <Button className="custom-btn">About Us</Button>
      <Button className="custom-btn">Services</Button>
      <Button className="custom-btn">Careers</Button>
    </ButtonGroup>
  );
}

export default Navbar;
