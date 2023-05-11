import React from "react";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import SendIcon from '@mui/icons-material/Send';

function HeaderPage(){


    return (
        <>
        <div className="header">
        <div className="hed1">
            <LocalPhoneIcon style={{fontSize:"medium",marginRight:"5px"}}></LocalPhoneIcon>
            <label color="#ffff">+1235 2355 98</label>
        </div>
        <div className="hed2">
        <SendIcon style={{fontSize:"medium",marginRight:"5px"}}></SendIcon>
        YOUREMAIL@EMAIL.COM
        </div>
        <div className="hed3">
        <label>3-5 BUSINESS DAYS DELIVERY & FREE RETURNS</label>
        </div>
        </div>
        </>
    )
}

export default HeaderPage;