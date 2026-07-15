import React from 'react'

const Userstate = (props) => {
 if(props.loggedin && props.isAdmin){
    return <h1>Welcome admin</h1>
 } else{
    return <h1>Welcome User</h1>
 }
}

export default Userstate