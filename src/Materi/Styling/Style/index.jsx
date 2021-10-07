import React from "react";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar } from "react-bootstrap";


export default class Styling extends React.Component{
    render() {
        return(
            <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#">Muhamad Amir Rudin Yusup</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link className="active me-5" href="#">Home</Nav.Link>
                        <Nav.Link className="active me-5" href="#about">About</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="jumbotron">
                <div className="container text-center">
                    <p className="fs-1 fw-bold text-white">Muhamad Amir Rudin Yusup</p>
                    <Button variant="primary" href="#">Primary</Button>{' '}
                </div>
            </div>
            <section className="about bg-light" id="about">
                <div className="container py-5">
                    <div className="header text-center">
                    <h1 className="fw-bold">Biografi</h1>
                    <p className="py-3 fs-5">Perkenalkan, saya Muhamad Amir Rudin Yusup, lulusan rekayasa perangkat lunak dari SMK Telkom Jakarta.</p>
                    </div>
                    <div className="row">
                    <div className="col-lg-4 mb-3">
                        <div className="list-group">
                        <button type="button" className="list-group-item list-group-item-action active" aria-current="true">
                            Technical Skills
                        </button>
                        <button type="button" className="list-group-item list-group-item-action">PHP</button>
                        <button type="button" className="list-group-item list-group-item-action">Laravel</button>
                        <button type="button" className="list-group-item list-group-item-action">CodeIgniter</button>
                        <button type="button" className="list-group-item list-group-item-action">My SQL</button>
                        <button type="button" className="list-group-item list-group-item-action">JavaScript</button>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-3">
                        <div className="list-group">
                        <button type="button" className="list-group-item list-group-item-action active" aria-current="true">
                            Personal Skills
                        </button>
                        <button type="button" className="list-group-item list-group-item-action">Team Work</button>
                        <button type="button" className="list-group-item list-group-item-action">Curious</button>
                        <button type="button" className="list-group-item list-group-item-action">Communication</button>
                        <button type="button" className="list-group-item list-group-item-action">Respectful</button>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-3">
                        <div className="list-group">
                        <button type="button" className="list-group-item list-group-item-action active" aria-current="true">
                            Projects
                        </button>
                        <button type="button" className="list-group-item list-group-item-action">Mirresi</button>
                        <button type="button" className="list-group-item list-group-item-action">Lapor-Kuy</button>
                        <button type="button" className="list-group-item list-group-item-action">Data-Covid</button>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            </>
        )
    }
}