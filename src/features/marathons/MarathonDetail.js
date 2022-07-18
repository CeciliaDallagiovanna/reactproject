import { Card, CardImg, CardText, CardBody, Col, CardTitle , Row } from 'reactstrap';

const MarathonDetail = ( {marathon} ) => {
    const { location, date, rating, type, image, distance, name} = marathon;

    return (
        <Col md='12' className='m-4'>
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardText>
                        <Row>
                            <Col>
                                <h5>Location</h5>
                                <p>{location}</p> 

                                <h5>Date</h5>
                                <p>{date}</p>
                            </Col>

                            <Col>
                                <h5>Distance</h5>
                                <p>{distance}</p>

                                <h5>Type</h5>
                                <p>{type}</p>
                            </Col>

                            <Col className='align-items-right' sm='3' md='2' xs='12'>
                                <h5>Rating</h5>
                                <p>{rating}</p>
                            </Col>
                        </Row>
                    </CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default MarathonDetail;