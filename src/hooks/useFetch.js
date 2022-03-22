import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [ dataUsers , setDataUsers ] = useState(null);
    
    useEffect(()=> {
        axios
        .get(url)
        .then( (res) => setDataUsers(res.data))
        .catch( (err) => console.error(err))
    } , [url])

    return {dataUsers, setDataUsers}
};

export default useFetch;