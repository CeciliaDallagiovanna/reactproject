import { 
    Container,
} from 'reactstrap';
import { useState } from 'react';
import MarathonList from '../features/marathons/MarathonList';
import { selectMarathonById } from '../features/marathons/marathonsSlice';
import SelectionForm from '../components/Selection';
import MarathonDetail from '../features/marathons/MarathonDetail';


// resolve carousel

// hacer lista the mratonas y usar el useState + setMenuOpen function + featured 
// para q aparexca una principal con descripcion y arriba el boton para elegir las 
// caracteristicas deseadas. 
// poner carousel en la featured y en la directory de la carrera elegida, ver en donde poner la foto

const HomePage = () => {
    const [marathonId, setMarathonId] = useState(0);
    const selectedMarathon = selectMarathonById(marathonId);

    return (
        <Container>
            {/* <MarathonDetail /> */}
            <SelectionForm setMarathonId={setMarathonId} />
            <MarathonList marathon={selectedMarathon} />
        </Container>
    )
};

export default HomePage;