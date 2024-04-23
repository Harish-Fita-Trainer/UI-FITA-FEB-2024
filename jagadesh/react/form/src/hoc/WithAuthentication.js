import React from "react";
const userone=true;
export default function Withathentication(Component)
{
    return function(){
        if(!userone){
            return<div>usernotAuthenticated</div>
        }
        return <Component/>;

    };
}//hoc function