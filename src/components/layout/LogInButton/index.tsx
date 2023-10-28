import styles from '../../style/NavButton.module.css';
import { useNavigate } from 'react-router-dom';

function LogInButton() {
    const navigate = useNavigate();

    return (
        <button className={styles.navButton}
            onClick={() => {
                navigate('/login');
            }}
        >
            Log in
        </button>
    )
}

export default LogInButton