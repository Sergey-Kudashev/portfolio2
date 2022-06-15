import React from 'react'
import { Container, Col, Image } from 'react-bootstrap'

const DevicePage = () => {
    const device = {id: 1, name: '12 pro', price: 10000, rating: 0, img: `https://m.media-amazon.com/images/I/71umuN8XVeL.jpg`}

    return (
        <Container className='mt-3'>
            <Col md={4}>
                <Image width={300} height={300} src={device.img}/>
            </Col>
            <Col md={4}>

            </Col>
            <Col md={4}>
            
            </Col>
        </Container>
    )
}

export default DevicePage