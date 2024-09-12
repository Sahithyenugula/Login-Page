
import { useLocation } from "react-router-dom";

function Welcome(){
    const location = useLocation();
    const { username } = location.state || {};
    return(
        <div>
            {username ? (<h1>Hello {username}!</h1>) : (<h1>No user logged in</h1>)}
        
        <p>you have successfully logged in.</p>

        <table border="1">
        <thead>
          <tr>
            <th>name </th>
            <th>abcd</th>
            <th>efgh</th>
            <th>ijkl</th>
            <th>mnop</th>
            <th>qrst</th>
            <th>Total</th>
          </tr>
        </thead>
        </table>
        </div>
        
    );
}
export default Welcome;