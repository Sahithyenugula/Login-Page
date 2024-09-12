import React from "react";
import Header from "./Header";
import Downfoot from "./Down_footer";
import Auth from "./Credentials";


function HomePage(){
    return(
        <div>
        <Header />
        <Auth />
        <Downfoot />
        </div>

    );
}
export default HomePage;