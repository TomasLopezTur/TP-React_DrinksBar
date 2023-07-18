import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.css';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import useModal from '../../hooks/useModal';
import useAuth from '../../hooks/UseAuth';

export default function Header (){
    const { toogleModal} = useModal();
    const { currentUser, logOut} = useAuth();
    return(
        <header className={`py-5 ${styles.header}`}>
                <h1>Buscador de Bebidas</h1>
                {
                    currentUser &&(
                        <>
                            <p>{currentUser.name}</p>
                            <FontAwesomeIcon icon={faCartShopping} onClick={toogleModal} />
                            <button onClick={logOut}>Cerrar sesion </button>
                        </>
                    )
                }
        </header>
    )
}