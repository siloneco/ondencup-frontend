import RoomCard from '../RoomCard';

import styles from './index.module.css'

export default function RoomCardDeployer({ roomSearchInput, rooms }: { roomSearchInput: string, rooms: any[] }) {

    const isMatch = (roomName: string) => {
        if (roomSearchInput === '') return true;
        return roomName.toLowerCase().includes(roomSearchInput.toLocaleLowerCase());
    }

    if (rooms.length === 0) {
        return (
            <div style={{ minWidth: 'calc()' }}>
                <h3 style={{ color: 'white' }}> 参加可能な部屋はありません</h3>
            </div>
        );
    }

    return (
        <div className={styles.cardContainer}>
            {rooms.map((room, index) => {
                if (!isMatch(room.room_name)) {
                    return null;
                }
                return (<RoomCard key={index} roomName={room.room_name} roomId={room.room_id}
                    highlight={roomSearchInput === '' ? 'plain' : 'highlight'} />);
            })}
            {rooms.map((room, index) => {
                if (isMatch(room.room_name)) {
                    return null;
                }
                return (<RoomCard key={index} roomName={room.room_name} roomId={room.room_id}
                    highlight={'dark'} />);
            })}
        </div>
    )
}