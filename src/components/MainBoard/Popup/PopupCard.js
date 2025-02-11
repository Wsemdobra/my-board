import { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import _, { isEmpty } from "lodash";
import { MODAL_ACTION_CLOSE } from '../../../utilities/constant';
import parse from 'html-react-parser';
import { v4 as uuidv4 } from 'uuid';
import Form from "react-bootstrap/Form";

function ModalPopup(props) {

    const { card, title, show, column, comment, setModalAction, description,onAction } = props;

    const [valueDescription, setValueDescription] = useState('')
    const [valueComment,setValueComment] = useState('')

    const inputRef = useRef(null)


    function newDescriptionCard() {

    }

    function newCommentCard() {

    }
    function saveNewDateCard() {
        console.log("data form :", valueDescription)
        console.log("data form :", valueComment)

        setModalAction(false)
    }


    return (
        <>


            <Modal show={show} id='form1'  onHide={() => setModalAction(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{parse(title)}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {description}
                    <Form.Control
                    name="description"
                        size={"sm"}
                        type="text"
                        value={valueDescription}
                        className="form-control"
                        onClick={newDescriptionCard}
                        onChange={(event) => setValueDescription(event.target.value)}
                        ref={inputRef}
                    />
                    {comment}
                    <br></br>
                    <Form.Control
                    name="comment"
                        size={"sm"}
                        type="text"
                        value={valueComment}
                        className="form-control"
                        onClick={newCommentCard}
                        onChange={(event) => setValueComment(event.target.value)}
                        ref={inputRef}
                    />
                        
                    

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => saveNewDateCard()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalPopup;