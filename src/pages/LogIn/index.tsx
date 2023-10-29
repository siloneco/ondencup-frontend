import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LayoutNav from "../../components/layout/LayoutNav";
import styles from './index.module.css'

export default function LogIn() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const logIn = async () => {
        const response = await fetch("http://" + import.meta.env.VITE_BACKEND_URL + '/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    user_name: username,
                    password: password
                }
            )
        });

        const data = await response.json();
        const token = data.token;
        localStorage.setItem('token', token);

        navigate('/')
    }

    return (
        <div>
            <LayoutNav />
            <div className={styles.inputWrapper}>
                <h2>Log In</h2>
                <div className={styles.inputWithTitle}>
                    <p>Username</p>
                    <input
                        className={styles.input}
                        content={username}
                        placeholder={'Enter your username'}
                        onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className={styles.inputWithTitle}>
                    <p>Password</p>
                    <input
                        className={styles.input}
                        placeholder={'Enter your password'}
                        content={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button
                    className={styles.logInButton}
                    onClick={logIn}
                >
                    LogIn
                </button>
            </div>
        </div>
    )
}