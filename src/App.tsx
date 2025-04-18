import { WebSocketProvider } from './contexts/WebSocketContext';
import ConnectionStatus from './components/ConnectionStatus';
import DanmuList from './components/DanmuList';
import RoomForm from './components/RoomForm';

import './App.css';

function App() {
  return (
    <WebSocketProvider>
      <div className="app">
        <ConnectionStatus />
        <div className="w-screen h-14 flex flex-row">
          <RoomForm />
        </div>
        <DanmuList />
      </div>
    </WebSocketProvider>
  );
}

export default App;
