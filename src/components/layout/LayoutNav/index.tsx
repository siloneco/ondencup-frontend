import styles from './index.module.css'
import SignInButton from '../SignUpButton'
import LogInButton from '../LogInButton'
import LogOutButton from '../LogOutButton';
import HomeButton from '../HomeButton';
import fetchUserName from '../../../lib/userdata/FetchUserName';

import { useState } from 'react';

export default function LayoutNav() {
    const [username, setUsername] = useState<string | null>(null);
    const [fetching, setFetching] = useState<boolean>(false);

    const token = localStorage.getItem('token');

    if (token !== null && username === null && !fetching) {
        setFetching(true);
        fetchUserName(token).then((username) => {
            setUsername(username);
            setFetching(false);
        })
    }

    let upperRight;

    if (username !== null) {
        upperRight = (
            <>
                <p style={{ paddingRight: '10px' }}> Hello, {username}!</p >
                <LogOutButton />
            </>
        )
    } else {
        upperRight = (
            <>
                <SignInButton />
                <LogInButton />
            </>
        )
    }

    return (
        <div>
            <nav className={styles.nav}>
                <div className={`${styles.navSpacer} ${styles.navRight}`}>
                    <HomeButton />
                </div>
                <div className={`${styles.navSpacer} ${styles.navCenter}`}>
                    <p>Project Name (Undefined)</p>
                </div>
                <div className={styles.navSpacer} style={{ paddingRight: '20px' }}>
                    {upperRight}
                </div>
            </nav>
        </div>
    )
}