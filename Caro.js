
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import Container from 'react-bootstrap/esm/Container';
import { Row,Col, Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
function Caro() {
    return (
        <div>
            <Container fluid>
              

                        <Carousel fade>

                            <Carousel.Item className='bg1' interval={2000}>

                                <Container className='mt-5'>
                                    <Row>
                                        <Col lg='5'>

                                            <h4 className='text-warning'>MENSColLECTION</h4>
                                            <h1>TEMPO D'ORO</h1>
                                            <p className='text-secondary'>Mauris cursus tellus nec orci dapibus, vitae rutrum nulla aliquet. Aenean eu massa ac turpis rhoncus mollis. Cras ac facilisis augue.</p>
                                            <Button variant='outline-light' className='mx-2' >shop Now</Button>
                                            <Button variant='outline-light' >More About</Button>
                                        </Col>
                                    </Row>
                                </Container>

                                {/* <img
                                    className="d-block w-100"
                                    src={require("../images/Slides/slider1.jpg")}
                                    alt="First slide"
                                /> */}

                            </Carousel.Item>
                            <Carousel.Item className='bg2' interval={2000}>
                                {/* <img
                                    className="d-block w-100"
                                    src={require("../images/Slides/slider2.jpg")}
                                         alt="Second slide"
                                /> */}
                                <Container className='mt-5'>
                                    <Row>
                                        <Col lg='5'>
                                            <h4 className='text-warning'>MENSColLECTION</h4>
                                            <h1>TEMPO D'ORO</h1>

                                            <p>Mauris cursus tellus nec orci dapibus, vitae rutrum nulla aliquet. Aenean eu massa ac turpis rhoncus mollis. Cras ac facilisis augue.</p>
                                            <Button variant='outline-light' className='mx-2' >shop Now</Button>
                                            <Button variant='outline-light' >More About</Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </Carousel.Item>
                            <Carousel.Item interval={2000} className='bg3'>
                                {/* <img
                                    className="d-block w-100"
                                    src={require("../images/Slides/slider3.jpg")}
                                    alt="Third slide"
                                /> */}
                                <Container className='mt-5'>
                                    <Row>
                                        <Col lg='5' >

                                            <h4 className='text-warning'>MENSColLECTION</h4>
                                            <h1>TEMPO D'ORO</h1>
                                            <p>Mauris cursus tellus nec orci dapibus, vitae rutrum nulla aliquet. Aenean eu massa ac turpis rhoncus mollis. Cras ac facilisis augue.</p>
                                            <Button variant='outline-light' className='mx-2' >shop Now</Button>
                                            <Button variant='outline-light' >More About</Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </Carousel.Item>
                        </Carousel>
                    

            </Container>
        </div>
    )
}

export default Caro