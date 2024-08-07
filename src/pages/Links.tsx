import Background from "../components/basic-ui/Background";
import UserCard from "../components/users/UserCard";

export default function Links() {
    return (
        <div style={{width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <Background/>
            <UserCard />
        </div>
    );
}