import { BodyStyle } from "./styles";
import React from "react";

export const Body=(props)=>{
    return(
        <BodyStyle>
            <div className="body-class">
                <div className="body-content-left">
                    <h1>Hello there</h1>
                </div>
                <div  className="body-content-right">
                    <div >
                    <button >Register</button>
                    <p>ALready have an account?</p> 
                    <button >login</button>
                    </div>

                </div>
            </div>

        </BodyStyle>
    );
}