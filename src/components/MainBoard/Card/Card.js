import React, { useEffect, useState } from 'react'
import "./Card.scss";
import { initData } from '../../../actions/initData';
import Form from "react-bootstrap/Form";
import ModalPopup from '../Popup/PopupCard';
import { MODAL_ACTION_CLOSE, MODAL_ACTION_SAVE_CHANGES } from '../../../utilities/constant';






export const Card = (props) => {

  const { card, column } = props

  const [modalAction, setModalAction] = useState(false)
 


  

  return (
    <>
      <div className='card-item'>
        {card.title}
        <div className='icon-edit'>
        <div>
          <i className='fa fa-trash ml-2'></i>
          </div>
          <i className='fa fa-edit mt-2' onClick={() => setModalAction(true)}></i>
         
        </div>
      </div>

      <ModalPopup
        show={modalAction}
        title={`${column.title}<br>${card.title}</br`}
        content={"Description"}
        setModalAction={setModalAction}
      />

    </>
  )
}
