import LoaderButton from "../components/LoaderButton";
import { Form } from "react-bootstrap";
import { useFormFields } from "../libs/hookLib";
import "./ProfileForm.css";

export default function ProfileForm({ user, isLoading, onSubmit}) {
    const [fields, handleFieldChange] = useFormFields({
        name: user.name,
        nickname: user.nickname,
        phone_number: user.phone_number,
        email: user.email
    });

    return (
        <Form className="Profile" onSubmit={onSubmit}>
                        <Form.Group size="lg" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="text"
                                value={fields.email}
                                onChange={handleFieldChange}
                                disabled
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={fields.name}
                                onChange={handleFieldChange}
                            />
                        </Form.Group>
                        <hr />
                        <Form.Group size="lg" controlId="nickname">
                            <Form.Label>Nickname</Form.Label>
                            <Form.Control
                                type="text"
                                value={fields.nickname}
                                onChange={handleFieldChange}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="phone_number">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control
                                type="phone_number"
                                value={fields.phone_number}
                                onChange={handleFieldChange}
                            />
                        </Form.Group>
                        <LoaderButton
                            block
                            size="lg"
                            type="submit"
                            isLoading={isLoading}
                        >
                            Update
                        </LoaderButton>
                    </Form>);
}

