import {
    Col, 
    Button, 
    Form, 
    FormGroup, 
    Label, 
    Input,
    Collapse,
} from 'reactstrap';
import { useState } from 'react';



// usar collapse
 
const SelectionForm = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    
    return (
        <>
            <Button color='dark' onClick={() => setMenuOpen(!menuOpen)}>Select</Button>

            <Collapse isOpen={menuOpen} Form>
                <Form className='selection-form'>
                    <FormGroup className='row-selection'>
                        <Col xs='4'>
                            <p>Distance</p>
                        </Col>
                        <Col>
                            <Button className='type-btn'>2 km</Button>
                            <Button className='type-btn'>4 km</Button>
                            <Button className='type-btn'>5 km</Button>
                            <Button className='type-btn'>10 km</Button>
                        </Col>
                    </FormGroup>

                    <FormGroup className='row-selection'>
                        <Col xs='4'>
                            <p>Type</p>
                        </Col>
                        <Col>
                            <Button className='type-btn'>In Person</Button>
                            <Button className='type-btn'>Virtual</Button>
                            <Button className='type-btn'>On Wheels</Button>
                        </Col>
                    </FormGroup>

                    <FormGroup className='row-selection'>
                        <Label for="location">Text Area</Label>
                        <Input type="textarea" name="text" id="location" />
                    </FormGroup>
                    
                </Form>
            </Collapse>
        </>
    )
};

export default SelectionForm;