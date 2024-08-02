import useTheme from "../hooks/useTheme";
import Signature from "../components/basic-ui/Signature";
import UserCard from "../components/users/UserCard";

export default function Home() {

    const { ToggleThemeButton } = useTheme();

    return (
        <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '20px' }}>
            <UserCard />
            <Signature />
            <ToggleThemeButton />
        </div>
    );
}