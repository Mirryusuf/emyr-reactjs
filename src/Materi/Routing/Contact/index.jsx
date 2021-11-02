import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Row, Col, Container, Form } from "react-bootstrap";

export default function Contact () {
    return(
        <Container className="py-5">
            <Row className="justify-content-center">
                <center><h2 className="fw-bolder">Contact Me</h2></center>
                <Col lg={6}>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <center><Button variant="primary">Primary</Button></center>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}