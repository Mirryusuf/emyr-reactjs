import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import logo from './1.png';
import { Container, Row, Col } from "react-bootstrap";

function Home () {
    return(
        <div>
            <Container>
                <Row>
                    <Col lg={4}>
                        <div className="image_home">
                            <img src={logo} />
                        </div>
                    </Col>
                    <Col lg={8}>
                        <div className="tittle_home">
                            <h1>Hi, I am Muhamad Amir Rudin Yusup</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Home;