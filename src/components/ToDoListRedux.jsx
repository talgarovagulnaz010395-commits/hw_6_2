import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store/usersSlice';

export function TodoRedux() {
    const dispatch = useDispatch();
    const { users, status } = useSelector(state => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);
    if (status === 'loading') return <p>Loading...</p>;
    return (
        <div>
            <h2>Redux Users</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} {user.username}</li>
                ))}
            </ul>
        </div>
    );
}
