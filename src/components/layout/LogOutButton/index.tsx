import styles from '../../style/NavButton.module.css';

export default function LogOutButton() {
    return (
        <button className={styles.navButton}
            onClick={() => {
                localStorage.removeItem('token');
                window.location.reload();
            }}>
            Log out
        </button>
    )
}