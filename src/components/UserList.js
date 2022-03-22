import React from 'react';

const UserList = ({dataUsers, selectUser, deleteUser}) => {
    
    return (
        <div className='card'>
            {
                dataUsers?.map((user)=> (
                    <div className='card-list' key={user.id} >
                        <ul>
                            <li className='li-name'><strong>{user.first_name}</strong>  <strong>{user.last_name}</strong></li>
                            <li className='li-email'><p>{user.email}</p></li>
                            <li> <i className='fas fa-birthday-cake icon-birthday'></i> {user.birthday}</li>
                        </ul>
                        <div className='buttons-list'>
                            <button onClick={() => deleteUser(user.id)}> 
                                <i className='fas fa-trash icon-delete'></i> 
                            </button>
                            <button onClick={() => selectUser(user) }>
                            <i className='fas fa-pencil-alt icon-pencil'></i>
                            </button>

                            
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default UserList;