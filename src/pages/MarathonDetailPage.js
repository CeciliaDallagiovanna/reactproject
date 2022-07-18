import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectMarathonById } from '../features/marathons/marathonsSlice';
import MarathonDetail from '../features/marathons/MarathonDetail';

const MarathonDetailPage = () => {
    const { marathonId } = useParams();
    const marathon = selectMarathonById(marathonId);

    return (
        <Container>
            <Row>
                <MarathonDetail marathon={marathon} />
            </Row>
        </Container>
    )
};

export default MarathonDetailPage