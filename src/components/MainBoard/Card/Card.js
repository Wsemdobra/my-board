import React, { useEffect, useState } from 'react'
import "./Card.scss";
import { initData } from '../../../actions/initData';
import Form from "react-bootstrap/Form";
import ModalPopup from '../Popup/PopupCard';
import { MODAL_ACTION_CLOSE, MODAL_ACTION_SAVE_CHANGES, MODAL_ACTION_CONFIRM } from '../../../utilities/constant';
import Dropdown from 'react-bootstrap/Dropdown';
import ConfirmModal from '../Common/ConfirmModal';



export const Card = (props) => {

  const { card, column, onUpdateColumn } = props

  const [modalAction, setModalAction] = useState(false)
  const [showModalDelete, setShowModalDelete] = useState(false)
  

 
  function onModalAction(type) {
    if (type === MODAL_ACTION_CLOSE) {
      //do nothing
    }
    if (type === MODAL_ACTION_CONFIRM) {
      //remove a column
      localStorage.removeItem('id')
      setShowModalDelete(false)
    }
  }
  return (
    <>
      <div className='card-item'>

        <div className='card-title' onClick={() => setModalAction(true)}>
          {card.title}
        </div>
        <div className="card-dropdown " onClick={() => setShowModalDelete(true)}>
          <Dropdown>
            <Dropdown.Toggle className='dropdown-toggle mt-1' variant="" id="dropdown-basic" size="sm">
            </Dropdown.Toggle>
          </Dropdown>
        </div>
      </div>

      <ModalPopup
        show={modalAction}
        title={`${column.title}<br>${card.title}</br>`}
        description={`${card.description}`}
        comment={`${card.comment}`}
        setModalAction={setModalAction}
        column={column}
      />
      <ConfirmModal
      key={card.id}
        show={showModalDelete}
        title={"Remove a task ?"}
        content={`Are you sure to remove this task: ${card.title}`}
        onAction={onModalAction}
      />

    </>
  )
}
