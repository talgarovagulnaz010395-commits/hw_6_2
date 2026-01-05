import { useEffect } from 'react';
import { useUserStore } from '../store/userStore';

export function TodoZustand() {
    const { users, loading, fetchUsers } = useUserStore();

    useEffect(() => {
        fetchUsers();
    }, []);
    if (loading) return <p>Loading...</p>;
    return (
        <div>
            <h2>Zustand Users</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}
