import React, { useEffect } from 'react';

const UsersForm = ({register, handleSubmit, setDataUser, addUser, reset, selectUser, toEdit, setToEdit, upDate, defaultValues}) => {
   
   
      
      useEffect((defaultValues)=> {
        if(toEdit){
            reset({
                id: toEdit.id,
                email: toEdit.email,
                  password: toEdit.password,
                  first_name: toEdit.first_name,
                  last_name: toEdit.last_name,
                  birthday: toEdit.birthday
              })
              
        }else{
            reset(defaultValues);
        }
      },[toEdit, reset])

    const submit = (data) => {
        if(toEdit){
        upDate(data);
        reset(defaultValues);
        
        setToEdit(undefined);
        }else{
            setDataUser(data);
            addUser(data);
            reset(defaultValues);
            setToEdit(undefined);
        }
    }
    return (
        <div className='form'>
            <form onSubmit={handleSubmit((data) => {
                submit(data)
                
            })}>

                <h2>New User</h2>
                <div className='name'>
                    <i className='fas fa-user'></i>
                    <input 
                    {...register("first_name")} 
                    placeholder="first name" 
                    />
                    
                    <input 
                    {...register("last_name")} 
                    placeholder="last name"
                    />
                </div>
                <div>
                    <i className='fas fa-envelope'></i>
                    <input 
                    {...register("email")} 
                    placeholder="email"
                    />
                </div>
                <div>
                    <i className='fas fa-lock'></i>
                    <input 
                    {...register("password")} 
                    placeholder="password"
                    type="password"
                    />
                </div>
                <div>
                    <i className='fas fa-birthday-cake'></i>
                    <input 
                    {...register("birthday")} 
                    type="date" 
                    />
                </div>
                <button type="submit" className='button-submit'>upload</button>
                {toEdit && <button onClick={ () => selectUser()}>Cancel</button>}
            </form>
            
        </div>    
    );
};

export default UsersForm;