import React from "react";
import Withathentication from "../loginauthentication/theme using usecontext/hoc/WithAuthentication";

function profile(){
    return (
        <div>Profile is authorized</div>
    )
}

export default Withathentication(profile)