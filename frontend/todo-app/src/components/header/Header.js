import { HeaderStyle } from "./styles";
import React from "react";

export const Header=()=>{
    return (
        <>
            <HeaderStyle>
                <div>
                    <strong>zipper</strong>
                </div>
                <div>
                    search
                </div>
            </HeaderStyle>
        </>
    );
}