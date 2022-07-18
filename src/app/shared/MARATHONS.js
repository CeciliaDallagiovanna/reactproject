import marathon1 from '../assets/img/marathon1.jpg';
import marathon2 from '../assets/img/marathon2.jpg';
import marathon3 from '../assets/img/marathon3.jpg';

export const MARATHONS = [
    {
        id: 0,
        name: 'X Marathon',
        image: marathon1,
        featured: true,
        rating: 3,
        distance: '5km / 10km',
        location: 'Location 1',
        date: '23/4/2022',
        type: 'In person'
    },
    {
        id: 1,
        name: 'Y Marathon',
        image: marathon2,
        featured: false,
        rating: 5,
        distance: '20km',
        location: 'Location 2',
        date: '7/7/2022',
        type: 'Virtual'
    },
    {
        id: 3,
        name: 'Z Marathon',
        image: marathon3,
        featured: false,
        rating: 4,
        distance: '30km',
        location: 'Location 3',
        date: '15/8/2022',
        type: 'In person'
    }
];