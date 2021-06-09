import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from './../store/userSlice';

const RegistrationForm = () => {
    const dispatch = useDispatch();
    const usersFromStore = useSelector(state => state.userData.data);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setUsers(usersFromStore);
        console.log(users);
    }, [usersFromStore]);
    
    const nameHandler = (event) => {
        setName(event.target.value);
    }
    const emailHandler = (event) => {
        setEmail(event.target.value);
    }
    const saveHandler = (event) => {
        event.preventDefault();
        const payload = {
            name: name,
            email: email
        }
        setName('');
        setEmail('');
        dispatch(userActions.saveUser(payload));
    }
    return  (
        <div>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" value={name} name="userName" onChange={nameHandler} id="name"/>
                <br/>
                <label htmlFor="email">Email</label>
                <input type="email" value={email} name="email" id="email" onChange={emailHandler} />
                <br/>
                <button onClick={saveHandler}>Save</button>

            </form>
            <hr/>
            <h2>Users</h2>
            <ul>
                {users.map((user, key) => 
                    <li key={key}>{user.name} - {user.email}</li>
                )}
            </ul>
            {users.length === 0 && <p>No User</p>}
        </div>
    )
}

export default RegistrationForm;