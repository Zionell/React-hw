import React from "react";
import style from "./Message.module.css"
export const Message=({message})=>{
return(
    <div className={style.wrapp}>
        <h1 className={style.message}>{message}</h1>
    </div>
)
}