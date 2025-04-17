import { WebSocketProvider } from './contexts/WebSocketContext';
import ConnectionStatus from './components/ConnectionStatus';
import DanmuList from './components/DanmuList';
import './App.css';

function App() {
  return (
    <WebSocketProvider>
      <div className="app">
        <ConnectionStatus />
        <RoomForm />
        <DanmuList />
      </div>
    </WebSocketProvider>
  );
}

export default App;
