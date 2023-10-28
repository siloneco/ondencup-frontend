import styles from '../../style/NavButton.module.css';
import { useNavigate } from 'react-router-dom'

export default function SignUpButton() {
    const navigate = useNavigate()

    return (
        <button className={styles.navButton}
            onClick={() => {
                navigate('/signup')
            }}
        >
            Sign up
        </button>
    )
}