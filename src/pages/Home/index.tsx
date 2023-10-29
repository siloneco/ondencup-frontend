import RoomSearchInput from "../../components/home/RoomSearchInput";
import styles from './index.module.css'

import background from '../../assets/image.png'
import { useState } from "react";
import LayoutNav from "../../components/layout/LayoutNav";
import fetchRoomList from "../../lib/roomdata/FetchRoomList";
import RoomCardDeployer from "../../components/home/RoomCardDeployer";

function Home() {
    const [roomIdFocus, setRoomIdFocus] = useState(false);
    const [roomSearchInput, setRoomSearchInput] = useState('');

    const [rooms, setRooms] = useState<any[]>([]);

    const token = localStorage.getItem('token')

    if (token !== null) {
        fetchRoomList(token).then((rooms) => {
            setRooms(rooms);
        })
    }

    const mainClass = roomIdFocus ? styles.darkMain : styles.main;
    const cardContainerWrapperClass = roomIdFocus ? styles.darkCardContainerWrapper : styles.cardContainerWrapper;

    return (
        <div className={styles.wrapper}>
            <LayoutNav />
            <div className={mainClass} style={{ backgroundImage: `url(${background})` }}>
                <div className={styles.roomSelectorContainer}>
                    <RoomSearchInput
                        setRoomIdFocus={setRoomIdFocus}
                        setRoomId={setRoomSearchInput}
                    />
                </div>
            </div>
            <div className={cardContainerWrapperClass}>
                <RoomCardDeployer roomSearchInput={roomSearchInput} rooms={rooms} />
            </div>
        </div>
    );
}

export default Home;