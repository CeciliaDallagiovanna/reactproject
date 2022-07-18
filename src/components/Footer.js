import { Container, Row, Col } from "reactstrap";
// import { Link } from 'react-router-dom'; Link sigue dando problema

const Footer = () => {
    return(
        <footer className='site-footer'>
            <Container>
                <Row>
                    <Col className='text-white text-left' xs={{size: 6, offset: 1}} >
                        <h5>Social</h5>
                        <ul className='list-unstyled'>
            
                        </ul>
                    </Col>
                    <Col xs='6' sm='3' className='text-center text-white'>
                        
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};

export default Footer;