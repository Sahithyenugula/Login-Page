import { useNavigate } from "react-router-dom";
import { useState } from "react";

function auth(){
    const [username, setUsername] = useState('');

    const navigate = useNavigate();

    const open=()=>{
        navigate('/welcome',{ state: { username } });
        };
    return(
        <div>
        <h1>LOGIN</h1>
        <ul> 
            <input
            placeholder="username "
            type="text"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            />
        </ul>
        <ul>
            <input placeholder="password"
            type="password"/>
        </ul>
        <ul>
            <button onClick={open}>submit</button>
        </ul>
        </div>
    );
}
export default auth;