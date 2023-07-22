import { Col, Row, Card, Button } from 'react-bootstrap';
import useDrinks from '../../hooks/useDrinks';
import PropTypes from 'prop-types';
import useCart from '../../hooks/useCart';


export default function DrinkCard({ drink }) {

    const { handleModalClick, handleDrinkIdClick } = useDrinks();
    const { addToCart } = useCart();

    function handleAddToCart (drink){
        addToCart(drink)
    }

    return (
        <Col md={6} lg={3} >
            <Card className='mb-4'>
                <Card.Img
                    variant='top'
                    src={drink.strDrinkThumb}
                    alt={`Imagen de ${drink.strDrink}`}
                />

                <Card.Body>
                    <Card.Title>{drink.strDrink}</Card.Title>
                    <Card.Subtitle style={{ marginBottom: 2, paddingTop: 20 }} >$ {drink.price}</Card.Subtitle>
                    <Row className='d-flex justify-content-center align-items-center'>

                        <Col className='w-40 p-1 mt-2'>

                            <Button
                                variant='primary'
                                className=' text-uppercase'
                                onClick={() => {
                                    handleModalClick();
                                    handleDrinkIdClick(drink.idDrink);
                                }
                                }
                            >
                                Ver Receta
                            </Button>

                        </Col>
                        <Col className='w-40 p-2 mt-2'>

                            <Button
                                variant='danger'
                                className=' text-uppercase'
                                onClick={() => handleAddToCart(drink) }
                            >
                                Agregar al carrito
                            </Button>

                        </Col>

                    </Row>

                </Card.Body>
            </Card>
        </Col>
    )
}

DrinkCard.propTypes = {
    drink: PropTypes.shape({
        strDrinkThumb: PropTypes.string.isRequired,
        strDrink: PropTypes.string.isRequired,
        idDrink: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
};