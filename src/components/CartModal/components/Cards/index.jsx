import PropTypes from 'prop-types';
import useCart from '../../../../hooks/useCart';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from './ModalCart.module.css'

export function ModalCard({ drink }) {
const { removeOneFromCart, removeAllFromCart, addToCart} = useCart();

    return (
        <article  className={styles.card}>
            <img src={drink.strDrinkThumb} alt='' />
            <span>{drink.strDrink}</span>
            <span>{drink.price}</span>
            <div className={styles.counter}>
                <button onClick={() => removeOneFromCart(drink.idDrink)}>
                    -
                </button>
                <span>{drink.quantity}</span>
                <button onClick={() => addToCart(drink)}>
                    +
                </button>
            </div>
            <FontAwesomeIcon icon={faTrash} className={styles.iconTrash} onClick={() => removeAllFromCart(drink.idDrink)} />
        </article>
    )
}

ModalCard.propTypes = {
    drink: PropTypes.object.isRequired,
}