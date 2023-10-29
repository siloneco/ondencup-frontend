import '@livekit/components-styles';
import {
    LiveKitRoom,
} from '@livekit/components-react';
import StreamPlayer from '../../components/room/StreamPlayer';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function Room() {
    const token = localStorage.getItem('token');

    useEffect(() => {
        const socket = new WebSocket(
            `ws://${import.meta.env.VITE_BACKEND_HOSTNAME}/ws?token=${token}&room=${slug}`
        );

        socket.addEventListener("open", (event) => {
            console.log("WebSocket connection established.");
        });
        socket.addEventListener("close", (event) => {
            console.log("WebSocket connection closed.");
        });

        return () => {
            socket.close();
        };
    }, []);


    // Use this room id for fetching livekit token
    const { slug } = useParams();

    // Get serverUrl and LiveKIT token from backend
    const serverUrl = "REDACTED"
    const roomToken = "REDACTED"

    return (
        <LiveKitRoom
            video={false}
            audio={false}
            token={roomToken}
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