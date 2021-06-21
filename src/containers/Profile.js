import React, { useEffect, useState, useRef } from "react";
import { Auth } from "aws-amplify";
import ProfileForm from "../components/ProfileForm";
import "./Profile.css";

export default function Profile() {
    const [currentUser, setCurrentUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false);

    useEffect(async () => {
        init();
    }, [])

    async function init() {
        const userPoolUser = await Auth.currentAuthenticatedUser();
        setCurrentUser(userPoolUser.attributes);
    }

    async function handleSubmitClick() {
        setIsLoading(true);
        alert('Successfully updated progile!');
     }
 
    return (
        <div className="Profile">
            <div class="d-flex flex-column align-items-center text-center">
                <img src="https://www.ikea.com/cz/en/images/products/smycka-artificial-flower-rose-red__0903311_pe596728_s5.jpg?f=s" alt="Admin" class="rounded-circle" width="150"/>
            </div>
            {currentUser ? <ProfileForm user={currentUser} isLoading={isLoading} onSubmit={handleSubmitClick}/> : <div></div>}
        </div>                   
  );
}