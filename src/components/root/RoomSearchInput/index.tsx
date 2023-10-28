import styles from './index.module.css'
import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

export default function RoomSearchInput({ roomIdFocus, setRoomIdFocus, setRoomId }: { roomIdFocus: boolean, setRoomIdFocus: Function, setRoomId: Function }) {
    return (
        <>
            <span className={styles.searchIcon}>
                <AiOutlineSearch size={'1.6rem'} color={'gray'} />
            </span>
            <input className={styles.roomIdInput} type="text"
                placeholder='ルーム名を入力'
                onChange={(e) => setRoomId(e.target.value)}
                onFocus={() => setRoomIdFocus(true)}
                onBlur={() => setRoomIdFocus(false)} />
        </>
    )
}