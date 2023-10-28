import '@livekit/components-styles';
import {
    LiveKitRoom,
} from '@livekit/components-react';

import StreamPlayer from '../../components/room/StreamPlayer';
import { useParams } from 'react-router-dom';

function Room() {
    // Use this room id for fetching livekit token
    const { slug } = useParams();

    // Get serverUrl and LiveKIT token from backend
    const serverUrl = "REDACTED"
    const token = "REDACTED"

    return (
        <LiveKitRoom
            video={false}
            audio={false}
            token={token}
            connectOptions={{ autoSubscribe: true }}
            serverUrl={serverUrl}
            // Use the default LiveKit theme for nice styles.
            data-lk-theme="default"
            style={{ height: '100vh', width: '100vw' }}
        >
            <StreamPlayer />
        </LiveKitRoom>
    )
}

export default Room;