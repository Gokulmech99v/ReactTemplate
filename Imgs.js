import React from 'react';
// import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
// import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Button } from 'react-bootstrap';
// import img from 'bootstrap'; 
// import {Row,Col} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';


function Imgs() {
    return (
        <div>
            <Container fluid>

                <Row >
                    <Col>
                        <Image className='qwe' src={require("../images/category-img1.jpg")} fluid />
                        <Button className='my-2' variant='outline-dark'>WoAddCa</Button>
                    </Col>
                    <Col>
                        <Button className='my-2' variant='outline-dark'>WoWoAddCa</Button>
                        <Image src={require("../images/category-img2.jpg")} fluid />
                    </Col>
                    <Col>
                        <Image src={require("../images/category-img3.jpg")} fluid />
                        <Button className='my-2' variant='outline-dark'>Spots</Button>
                    </Col>

                </Row>


                <Row className=' bg-dark'>
                    <Col className='my-5 text-center'>
                        {/* <h4 className='text-warning'>WoAddCa COLLECTION</h4> */}
                        <h6 className="text-warning my-4">360 COLLECTION</h6>
                        <h2 className="text-light">Featured Products</h2>
                    </Col>
                    <Row className='my-5'>

                        <Carousel>
                            <Carousel.Item interval={4000}>

                                <Row className='d-flex justify-content-center'>
                                    <Col className='justify-content-center'>
                                        <img
                                            className="d-block w-7 img-fluid"
                                            src={require("../images/product-img1.png")}
                                            alt="Second slide"
                                        />
                                        <h5 className='text-warning my-2'>Daniel Wellington</h5>
                                        <p className='text-warning my-2'>Rs 1999</p>
                                        <Button className='my-2' variant='outline-light'>Book-now</Button>
                                    </Col>
                                    <Col>

                                        <img
                                            className="d-block w-8"
                                            src={require("../images/product-img2.png")}
                                            alt="Second slide"
                                        />
                                        <h5 className='text-warning'>Chrono Carbon</h5>
                                        <p className='text-warning my-2'>Rs 1999</p>
                                        <Button className='my-2' variant='outline-light'>Book-now</Button>
                                    </Col>
                                    <Col>

                                        <img
                                            className="d-block w-8"
                                            src={require("../images/product-img3.png")}
                                            alt="Second slide"
                                        />
                                        <h5 className='text-warning'>Portugieser Heritage</h5>
                                        <p className='text-warning my-2'>Rs 1999</p>
                                        <Button className='my-2' variant='outline-light'>Book-now</Button>
                                    </Col>
                                    <Col>

                                        <img
                                            className="d-block w-8"
                                            src={require("../images/product-img4.png")}
                                            alt="Second slide"
                                        />
                                        <h5 className='text-warning'>Gunmetal Sandstone</h5>
                                        <p className='text-warning my-2'>Rs 1999</p>
                                        <Button className='my-2' variant='outline-light'>Book-now</Button>
                                    </Col>
                                </Row>

                            </Carousel.Item>

                            <Carousel.Item interval={4000}>

                                <Row className='d-flex justify-content-start'>
                                    <Col className=''>
                                        <img
                                            className="d-block w-7"
                                            src={require("../images/product-img1.png")}
                                            alt="Second slide"
                                        />
                                        <h5 className='text-warning my-2'>Daniel Wellington</h5>
                                        <p className='text-warning my-2'>Rs 1999</p>
                                        <Button className='my-2' variant='outline-light'>Book-now</Button>
                                    </Col>
                                    <Col>

                                        <img
                                            className="d-block w-8"
                                            src={require("../images/product-img2.png")}
                                            alt="Second slide"
                                        />
                                        <h5 className='text-warning'>Chrono Carbon</h5>
                                        <p className='text-warning my-2'>Rs 1999</p>
                                        <Button className='my-2' variant='outline-light'>Book-now</Button>
                                    </Col>
                                    <Col>

                                        <img
                                            className="d-block w-8"
                                            src={require("../images/product-img3.png")}
                                            alt="Second slide"
                                        />
                                        <h5 className='text-warning'>Portugieser Heritage</h5>
                                        <p className='text-warning my-2'>Rs 1999</p>
                                        <Button className='my-2' variant='outline-light'>Book-now</Button>
                                    </Col>
                                    <Col >

                                        <img
                                            className="d-block w-8"
                                            src={require("../images/product-img4.png")}
                                            alt="Second slide"
                                        />
                                        <h5 className='text-warning'>Gunmetal Sandstone</h5>
                                        <p className='text-warning my-2'>Rs 1999</p>
                                        <Button className='my-2' variant='outline-light'>Book-now</Button>
                                    </Col>
                                </Row>

                            </Carousel.Item>
                        </Carousel>
                    </Row>

                </Row>
                <Row>
                    <Col>
                        <div className='gogul'>
                            <figure>
                                <Image className='qwe' src={require("../images/home-section3-bg.jpg")} fluid />
                               <div className='gogul1'>
                               <figcaption>
                                    <h6 className='text-warning'>New Trending</h6>
                                    <h1 className='fw-bold text-light fs-1 text-uppercase' >Collection</h1>
                                    <p className='text-light'>We Believe That Good Design is Always in Season</p>
                                    <Button variant='outline-light' className='mx-2' >shop Now</Button>
                                    <Button variant='outline-light' >sale off 20% all product</Button>
                                </figcaption>

                               </div>
                            </figure>
                        </div>


                    </Col>

                </Row>

            </Container >
        </div>
    )
}
export default Imgs
