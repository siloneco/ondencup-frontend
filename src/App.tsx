import '@livekit/components-styles';
import {
  LiveKitRoom,
} from '@livekit/components-react';

import StreamPlayer from './components/StreamPlayer';

const serverUrl = 'REDACTED';
const token = 'REDACTED';

function App() {
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
  );
}

export default App;