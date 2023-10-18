import '@livekit/components-styles';
import {
  LiveKitRoom,
  GridLayout,
  ParticipantTile,
  ControlBar,
  RoomAudioRenderer,
  useTracks
} from '@livekit/components-react';

const serverUrl = 'REDACTED';
const token = 'REDACTED';

function App() {
  return (
    <LiveKitRoom
      video={true}
      audio={true}
      token={token}
      connectOptions={{ autoSubscribe: false }}
      serverUrl={serverUrl}
      // Use the default LiveKit theme for nice styles.
      data-lk-theme="default"
      style={{ height: '100vh', width: '100vw' }}
    >
      <MyVideoConference />
      <RoomAudioRenderer />
      <ControlBar />
    </LiveKitRoom>
  );
}

function MyVideoConference() {
  // `useTracks` returns all camera and screen share tracks. If a user
  // joins without a published camera track, a placeholder track is returned.
  const tracks = useTracks(
    undefined,
    { onlySubscribed: false },
  );
  return (
    <GridLayout tracks={tracks} style={{ height: 'calc(100vh - var(--lk-control-bar-height))' }}>
      {/* The GridLayout accepts zero or one child. The child is used
      as a template to render all passed in tracks. */}
      <ParticipantTile />
    </GridLayout>
  );
}

export default App;