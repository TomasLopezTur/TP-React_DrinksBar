import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.css';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import useModal from '../../hooks/useModal';
import useAuth from '../../hooks/UseAuth';

export default function Header (){
    const { toogleModal} = useModal();
    const { currentUser, logOut} = useAuth();
    return(
        <header className={`py-3 ${styles.header}`}>
                <h1>Drinks-B@r</h1>
                <h5>Buscador de Bebidas</h5>
                {
                    currentUser &&(
                        <>
                            <div className={styles.headerConter}>
                                <p className='mt-3'>{currentUser.name}</p>
                                <FontAwesomeIcon className={styles.icon} icon={faCartShopping} onClick={toogleModal} />
                                <button onClick={logOut}>Salir</button>
                            </div>
                        </>
                    )
                }
        </header>
    )
}