import NewsCard from '../features/news/NewsList';
import { Container, Row, Col } from 'reactstrap';
import { NEWS } from '../app/shared/NEWS';

const AboutPage = () => {
    
    return (
        <Container>
            <Row>
                <Col xs='12'>
                    <NewsCard news={NEWS[0]} />
                </Col>
            </Row>
        </Container>
    )
};

export default AboutPage;