import './Netflix.css';
import neta from './net.png';
import { Container, Row, Col } from 'react-bootstrap';

function Netflix() {
    return (
        <Container>
            <Row>
                <Col>
                    <img style={{ width: '15%' }} src={neta} alt='' />
                </Col>
                <Col md={4} className='vcx offset-md-4' style={{ backgroundColor: 'black' }}>
                    <p style={{ color: 'white', fontWeight: 'bold' }}>Sign in</p>
                    <input type='text' placeholder='   Email or phone number' style={{ height: '30px', backgroundColor: 'gray', borderRadius: '10px' }} /><br /><br />
                    <input type='text' placeholder='   Password' style={{ height: '30px', backgroundColor: 'gray', borderRadius: '10px' }} /><br /><br /><br />
                    <button style={{ backgroundColor: 'red', textAlign: 'center', color: 'white', borderRadius: '10px' }}>Sign in</button>
                </Col>
            </Row>
        </Container>
    )
}

export default Netflix;
