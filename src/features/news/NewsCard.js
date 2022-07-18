import { 
    Card, 
    CardBody, 
    CardImg, 
    CardText,
    CardTitle,
} from 'reactstrap';

const NewsCard = ({ news }) => {
    const {image, name, description } = news;

    return(
        <Card className='news-card'>
            <CardImg top width='100%' className='news-img' src={image} alt={name} />
            <CardBody>
                <CardTitle><h2>{name}</h2></CardTitle>
                <CardText>{description}</CardText>
            </CardBody>
        </Card>

    )
};

export default NewsCard;