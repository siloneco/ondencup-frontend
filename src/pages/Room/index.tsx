import '@livekit/components-styles';
import {
    LiveKitRoom,
} from '@livekit/components-react';
import StreamPlayer from '../../components/room/StreamPlayer';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getLiveKitToken from '../../lib/userdata/GetLiveKitToken';
import LayoutNav from '../../components/layout/LayoutNav';

function Room() {
    const [livekitToken, setLivekitToken] = useState<string | null>(null);
    const [livekitTokenFetched, setLivekitTokenFetched] = useState(false);

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


    const { slug } = useParams();

    if (slug !== undefined && !livekitTokenFetched) {
        setLivekitTokenFetched(true)
        getLiveKitToken(slug)
            .then((token) => setLivekitToken(token))

        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <>
            <LayoutNav />
            <LiveKitRoom
                video={false}
                audio={false}
                token={livekitToken as string}
                connectOptions={{ autoSubscribe: true }}
                serverUrl={import.meta.env.VITE_LIVEKIT_SERVER_URL}
                // Use the default LiveKit theme for nice styles.
                data-lk-theme="default"
                style={{ height: 'calc(100vh - 60px)', width: '100vw' }}
            >
                <StreamPlayer />
            </LiveKitRoom>
        </>
    )
}

export default Room;