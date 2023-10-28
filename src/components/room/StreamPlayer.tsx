import '@livekit/components-styles';
import {
    useRemoteParticipant,
    useMediaTrack,
} from '@livekit/components-react';
import { useRef } from 'react';
import { Participant, Track } from 'livekit-client';

function StreamPlayer() {
    const participant = useRemoteParticipant('streamer');
    if (!participant) {
        return (<p>Loading...</p>);
    }

    return (
        <StreamPlayerCore participant={participant} />
    );
}

const StreamPlayerCore = ({ participant }: { participant: Participant }) => {
    const videoEl = useRef<HTMLVideoElement>(null);

    useMediaTrack(Track.Source.Camera, participant, {
        element: videoEl,
    });

    useMediaTrack(Track.Source.Microphone, participant, {
        element: videoEl,
    });

    return (
        <video ref={videoEl} />
    );
};

export default StreamPlayer;