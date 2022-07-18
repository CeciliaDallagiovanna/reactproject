import MarathonCard from './MarathonCard';
import { Row, Col } from "reactstrap";
import { selectAllMarathons } from './marathonsSlice';

const MarathonList = () => {
    const marathons = selectAllMarathons();

    return (
        <Row className='news-card'>
            {marathons.map((marathon) => {
                return (
                    <Col 
                    md='12' 
                    className='m-4' 
                    key={marathon.id}
                    >
                        <MarathonCard marathon={marathon} />
                    </Col>
                );
            })}
        </Row>
    )
};

export default MarathonList;