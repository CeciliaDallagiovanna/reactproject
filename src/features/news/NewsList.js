import { Row } from 'reactstrap';
import NewsCard from './NewsCard';
import { selectAllNews } from './newsSlice';

const NewsList = () => {
    const news = selectAllNews();

    return (
        <>
            {news.map((news) => {
                return (
                    <Row key={news.id}>
                        <NewsCard news={news} />
                    </Row>
                );
            })}
        </>
    )
};

export default NewsList;