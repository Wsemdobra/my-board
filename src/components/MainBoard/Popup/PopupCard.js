import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MODAL_ACTION_CLOSE } from '../../../utilities/constant';
import parse from 'html-react-parser';

function ModalPopup(props) {

    const { title, content, show, setModalAction } = props;



    return (
        <>


            <Modal show={show} onHide={() => setModalAction(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{parse(title)}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {content}
                    <textarea
                        rows={2}
                        className="form-control"
                        placeholder="Enter a description..."
                    />
                    <br></br>
                    <h6>Card comment</h6>
                    <input
                        className='input-comment'
                        placeholder="Enter a comment card..."
                    />

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalPopup;