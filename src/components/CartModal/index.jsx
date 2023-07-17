import styles from './CartModal.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import useModal from '../../hooks/useModal';
import useCart from '../../hooks/useCart';
import { ModalCard } from './components/Cards';


export default function CartModal (){
    /* const { isOpen, toogleModal} = useModal(); */
    const { isOpen, toogleModal } = useModal();
    console.log(isOpen)
    const { cart, clearCart, sendOrder, orderTotal } = useCart();
    
    if(isOpen)
    return (
        <div className={styles.modalBg}>
            <div className={styles.modal}>
                <FontAwesomeIcon icon={faXmarkCircle} className={styles.iconClose} onClick={toogleModal}/>
                <h2>Mi Carrito</h2>
                <section className={styles.modalBody}>
                    <div className={styles.modalDrinksListContainer}>
                    {console.log(cart)}
                    {cart.cartItems.length === 0 && (
                        <h6>No hay productos en el carrito</h6>
                    )}
                        {cart.cartItems.map((drink) =>(
                                <ModalCard key={drink.idDrink} drink={drink}/>
                        ))
                        }
                    </div>
                    <aside>
                        {/* <p>Subtotal: xxxxxxxxx</p> */}
                        <p>Total: {orderTotal}</p>
                        <div className={styles.btnContainer}>
                            <button className={styles.clearCart} onClick={clearCart}>Vaciar carrito</button>
                            <button className={styles.confirmOrder} onClick={sendOrder}>Confirmar compra</button>
                        </div>
                    </aside>
                </section>
            </div>
        </div>
    )
}