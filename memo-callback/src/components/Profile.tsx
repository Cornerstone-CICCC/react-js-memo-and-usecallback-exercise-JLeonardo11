import { memo, useCallback, useState } from "react"

type Props = {
    firstname: string
    lastname: string
}

const Profile = ({firstname, lastname}: Props) => {
    console.log("Rendered Profile component");

    
    return (
        <div>
        <h2>Profile</h2>
        <h3>Name: {firstname}</h3>
        <h3> Surname: {lastname}</h3>
    
        </div>
    )
}

export default Profile