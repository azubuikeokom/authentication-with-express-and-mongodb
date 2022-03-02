import React from "react";

export const Form=()=>{
    return(
        <form action="" method="POST">
            <input type={"text"} placeholder={"email address"} />
            <input type={"password"} placeholder={"password"}/>
            <button type="submit">Register</button>
        </form>
    );
}