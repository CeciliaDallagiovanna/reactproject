import { 
    Col, 
    Row, 
    Card, 
    CardBody, 
    CardImg, 
    CardText,
    CardTitle,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const MarathonCard = ({ marathon }) => {
    const { id, location, date, rating, type, image, distance, name} = marathon;
    const linkStyle = {
        textDecoration: 'none',
        color: 'black'
    }

    return(
        <Link to={`${id}`} style={linkStyle}>
            <Card className='news-card'>
                <CardBody>
                    <Col xs='3' md='2'>
                        <CardImg className='d-block w-100' src={image} alt='Z Marathon' />
                    </Col>
                    <Col xs='9' md='10'>
                        

                        <CardTitle>{name}</CardTitle>

                        <CardText>
                            <Row>
                                <Col>
                                    <h5>Location</h5>
                                    <p>{location}</p> <br />

                                    <h5>Date</h5>
                                    <p>{date}</p>
                                </Col>

                                <Col>
                                    <h5>Distance</h5>
                                    <p>{distance}</p> <br />

                                    <h5>Type</h5>
                                    <p>{type}</p>
                                </Col>

                                <Col className='align-items-right' xs='12'>
                                    <h5>Rating</h5>
                                    <p>{rating}</p>
                                </Col>
                            </Row>
                        </CardText>
                    </Col>
                </CardBody>
            </Card>
        </Link>
    )
};

export default MarathonCard;