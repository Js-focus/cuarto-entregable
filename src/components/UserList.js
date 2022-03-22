import React from 'react';

const UserList = ({dataUsers, selectUser, deleteUser}) => {
    
    return (
        <>
            {
                dataUsers?.map((user)=> (
                    <div key={user.id}>
                        <ul>
                            <li><strong>{user.first_name}</strong>  <strong>{user.last_name}</strong></li>
                            <li><p>{user.email}</p></li>
                            <li><img src="" alt="" /> {user.birthday}</li>
                        </ul>
                        <div>
                            <button onClick={() => selectUser(user) }>modificar</button>
                            <button onClick={() => deleteUser(user.id)}>delete</button>
                        </div>
                    </div>
                ))
            }
        </>
    );
};

export default UserList;