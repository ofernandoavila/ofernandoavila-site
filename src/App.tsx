import Signature from './components/basic-ui/Signature';
import UserCard from './components/users/UserCard';

function App() {
  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '20px' }}>
      <UserCard/>
      <Signature />
    </div>
  );
}

export default App;
