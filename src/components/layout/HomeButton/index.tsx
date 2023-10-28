import styles from '../../style/NavButton.module.css';
import { useNavigate } from 'react-router-dom';

export default function HomeButton() {
    const navigate = useNavigate();

    return (
        <button className={styles.navButton}
            onClick={() => {
                navigate('/');
            }}
        >
            Home
        </button>
    )
}