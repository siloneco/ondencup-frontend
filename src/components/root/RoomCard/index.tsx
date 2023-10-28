import { FaMusic } from 'react-icons/fa'
import styles from './index.module.css'

type Highlight = 'plain' | 'highlight' | 'dark'

export default function RoomCard({ roomName, roomId, highlight }: { roomName: string, roomId: string, highlight: Highlight }) {
    var cardClass = styles.card
    if (highlight === 'highlight') cardClass = styles.cardHighlight
    else if (highlight === 'dark') cardClass = styles.cardDark

    return (
        <div className={cardClass}>
            <div className={styles.title}>
                <span className={styles.titleIcon}><FaMusic color={'gray'} /></span>
                < p > {roomName}</p>
            </div>
        </div>
    )
}