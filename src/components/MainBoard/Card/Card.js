import React, { useEffect, useState } from 'react'
import "./Card.scss";
import { initData } from '../../../actions/initData';
import ConfirmModal from '../Common/ConfirmModal';
import Form from "react-bootstrap/Form";





export const Card = (props) => {

  const { card,column,onUpdateColumn } = props


  return (
    <>
      <div className='card-item'>
        {card.title}
        <div className='icon-edit' >
          <i className='fa fa-edit' ></i>
        </div>
      </div>
    </>
  )
}
