import styles from './CartModal.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import useModal from '../../hooks/useModal';


export default function CartModal (){
    const { isOpen, toogleModal } = useModal();

    
    return (
        <div className={styles.modalBg}>
            <div className={styles.modal}>
                <FontAwesomeIcon icon={faXmarkCircle} className={styles.iconClose} />
                <h2>Mi Carrito</h2>
                <section className={styles.modalBody}>
                    <div className={styles.modalDrinksListContainer}>
                        <article className={styles.card}>
                            <img src="https://www.thecocktaildb.com/images/media/drink/tqxyxx1472719737.jpg" />
                            <span>Nombre P</span>
                            <span>Precio</span>
                            <div className={styles.counter}>
                                <button>
                                    -
                                </button>
                                <span>2</span>
                                <button>
                                    +
                                </button>
                            </div>
                            <FontAwesomeIcon icon={faTrash} className={styles.iconTrash}/>
                        </article>
                    </div>
                    <aside>
                        <p>Subtotal: xxxxxxxxx</p>
                        <p>Total: xxxxxxxxx</p>
                        <div className={styles.btnContainer}>
                            <button className={styles.clearCart}>Vaciar carrito</button>
                            <button className={styles.confirmOrder}>Confirmar compra</button>
                        </div>
                    </aside>
                </section>
            </div>
        </div>
    )
}