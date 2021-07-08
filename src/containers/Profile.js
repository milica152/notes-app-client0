import React, { useEffect, useState, useRef } from "react";
import { Auth } from "aws-amplify";
import ProfileForm from "../components/ProfileForm";
import "./Profile.css";
import Form from "react-bootstrap/Form";
import LoaderButton from "../components/LoaderButton";
import { s3UploadPicture } from "../libs/awsLib";
import config from "../config";
import { onError } from "../libs/errorLib";

export default function Profile() {
    const [currentUser, setCurrentUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const [file, setFile] = useState(null)
    const [isLoadingPicture, setIsLoadingPicture] = useState(false);

    useEffect(async () => {
        init();
    }, [])

    async function init() {
        const userPoolUser = await Auth.currentAuthenticatedUser();
        setCurrentUser(userPoolUser.attributes);
    }

    async function changePicture() {
        alert("calling API. . . ");
    }

    async function handleSubmitClick(event) {
        event.preventDefault();
        setIsLoading(true);
        alert('Successfully updated progile!');
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if (file && file.size > config.MAX_ATTACHMENT_SIZE) {
            alert(
                `Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE / 1000000
                } MB.`
            );
            return;
        }
        setIsLoadingPicture(true);

        try {
            const attachment = file ? await s3UploadPicture(file) : null;
            await changePicture({ image: attachment });
            setIsLoadingPicture(false);
        } catch (e) {
            onError(e);
            setIsLoadingPicture(false);
        }
    }
    
    async function handleFileChange(event) {
        setFile(event.target.files[0]);
    }
    
    function validateForm() {
        return file;
    }

    return (
        <div className="Profile">
            <div class="d-flex flex-column align-items-center text-center">
                <img src="https://www.ikea.com/cz/en/images/products/smycka-artificial-flower-rose-red__0903311_pe596728_s5.jpg?f=s" alt="Admin" class="rounded-circle" width="150" />
            </div>
            <div className="upload-picture">
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="file">
                        <Form.Label>Upload profile picture:</Form.Label>
                        <Form.Control onChange={handleFileChange} type="file" />
                    </Form.Group>
                    <LoaderButton
                        block
                        type="submit"
                        size="lg"
                        variant="primary"
                        isLoading={isLoadingPicture}
                        disabled={!validateForm()}
                    >
                        Upload
                    </LoaderButton>
                </Form>
            </div>
            {currentUser ? <ProfileForm user={currentUser} isLoading={isLoading} onSubmit={handleSubmitClick} /> : <div></div>}
        </div>
  );
}