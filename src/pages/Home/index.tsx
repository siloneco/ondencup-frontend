import RoomSearchInput from "../../components/root/RoomSearchInput";
import RoomCard from "../../components/root/RoomCard";
import styles from './index.module.css'

import background from '../../assets/image.jpg'
import { useState } from "react";
import LayoutNav from "../../components/layout/LayoutNav";

function Home() {
    const [roomIdFocus, setRoomIdFocus] = useState(false);
    const [roomSearchInput, setRoomSearchInput] = useState('');

    const isMatch = (roomName: string) => {
        if (roomSearchInput === '') return true;
        return roomName.toLowerCase().includes(roomSearchInput.toLocaleLowerCase());
    }

    let roomsTmp = []
    for (let i = 1; i <= 6; i++) {
        const title = `Room ${i}`;
        roomsTmp.push({ title: title, roomId: "123456" })
    }

    const mainClass = roomIdFocus ? styles.darkMain : styles.main;
    const cardContainerWrapperClass = roomIdFocus ? styles.darkCardContainerWrapper : styles.cardContainerWrapper;

    return (
        <div className={styles.wrapper}>
            <LayoutNav />
            <div className={mainClass} style={{ backgroundImage: `url(${background})` }}>
                <div className={styles.roomSelectorContainer}>
                    <RoomSearchInput
                        roomIdFocus={roomIdFocus}
                        setRoomIdFocus={setRoomIdFocus}
                        setRoomId={setRoomSearchInput}
                    />
                </div>
            </div>
            <div className={cardContainerWrapperClass}>
                <div className={styles.cardContainer}>
                    {roomsTmp.map((room, index) => {
                        if (!isMatch(room.title)) {
                            return null;
                        }
                        return (<RoomCard key={index} roomName={room.title} roomId={room.roomId}
                            highlight={roomSearchInput === '' ? 'plain' : 'highlight'} />);
                    })}
                    {roomsTmp.map((room, index) => {
                        if (isMatch(room.title)) {
                            return null;
                        }
                        return (<RoomCard key={index} roomName={room.title} roomId={room.roomId}
                            highlight={'dark'} />);
                    })}
                </div>
            </div>
        </div>
    );
}

export default Home;