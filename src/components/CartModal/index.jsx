import styles from './CartModal.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import useModal from '../../hooks/useModal';
import useCart from '../../hooks/useCart';


export default function CartModal (){
    /* const { isOpen, toogleModal} = useModal(); */
    const { isOpen, toogleModal } = useModal();
    console.log(isOpen)
    const { cart, addToCart, removeOneFromCart, RemoveAllFromCart, clearCart } = useCart();
    
    if(isOpen)
    return (
        <div className={styles.modalBg} onClick={toogleModal}>
            <div className={styles.modal}>
                <FontAwesomeIcon icon={faXmarkCircle} className={styles.iconClose} onClick={toogleModal}/>
                <h2>Mi Carrito</h2>
                <section className={styles.modalBody}>
                    <div className={styles.modalDrinksListContainer}>
                    {console.log(cart)}
                        {cart.cartItems.map((drink) =>(
                                <article key={drink.idDrink} className={styles.card}>
                                    <img src={drink.strDrinkThumb} alt=''/>
                                    <span>{drink.strDrink}</span>
                                    <span>{drink.price}</span>
                                    <div className={styles.counter}>
                                        <button onClick={removeOneFromCart}>
                                            -
                                        </button>
                                        <span>{drink.quantity}</span>
                                        <button onClick={()=> addToCart(drink)}>
                                            +
                                        </button>
                                    </div>
                                    <FontAwesomeIcon icon={faTrash} className={styles.iconTrash} onClick={RemoveAllFromCart}/>
                                </article>
                        ))
                        }
                    </div>
                    <aside>
                        <p>Subtotal: xxxxxxxxx</p>
                        <p>Total: xxxxxxxxx</p>
                        <div className={styles.btnContainer}>
                            <button className={styles.clearCart} onClick={clearCart}>Vaciar carrito</button>
                            <button className={styles.confirmOrder}>Confirmar compra</button>
                        </div>
                    </aside>
                </section>
            </div>
        </div>
    )
}