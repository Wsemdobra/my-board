import { Card } from "../Card/Card";
import "./Column.scss";
import { initData } from "../../../actions/initData";
import React, { useEffect, useRef, useState } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import { v4 as uuidv4 } from 'uuid';
import _ from "lodash";
import Dropdown from 'react-bootstrap/Dropdown';
import ConfirmModal from "../Common/ConfirmModal";
import Form from "react-bootstrap/Form";
import { MODAL_ACTION_CLOSE, MODAL_ACTION_CONFIRM } from '../../../utilities/constant';
import { current } from "@reduxjs/toolkit";


const Column = (props) => {

  const { column, onCardDrop, onUpdateColumn } = props;
  const cards = column.cards;

  const [showAddNewCard, setShowAddNewCard] = useState(false)
  const textAreaRef = useRef(null)
  const [valueTextArea, setValueTextArea] = useState("")

  const [showModalDelete, setShowModalDelete] = useState(false)
  const [titleColumn, setTitleColumn] = useState('')

  const [firstClick, setFirstClick] = useState(true)
  const inputRef = useRef(null)

//update titleColumn

  useEffect(() => {
    if (column && column.title)
      setTitleColumn(column.title)
  }, [column])

//the field for creating a new card

  useEffect(() => {
    if (showAddNewCard === true && textAreaRef && textAreaRef.current)
      textAreaRef.current.focus()
  }, [showAddNewCard])

  function toggleModal() {
    setShowModalDelete(!showModalDelete)
  }

  function onModalAction(type) {
    if (type === MODAL_ACTION_CLOSE) {
      //do nothing
    }
    if (type === MODAL_ACTION_CONFIRM) {
      //remove a column
      const newColumn = {
        ...column,
        _destroy: true
      }
      onUpdateColumn(newColumn)
    }
    toggleModal()
  }

  function selectAllText(event) {
    setFirstClick(false)
    if (firstClick) {
      event.target.select();
    } else {
      inputRef.current.setSelectionRange(titleColumn.length, titleColumn.length)
    }
    //event.target.focus();
  }
  function handleClickOutside() {
    // do somthing...
    setFirstClick(true);
    const newColumn = {
      ...column,
      title: titleColumn,
      _destroy: false
    }
    onUpdateColumn(newColumn)
  }

  function handleAddNewCard() {
    if (!valueTextArea) {
      textAreaRef.current.focus()
      return
    }

    const newCard = {
      id: uuidv4(),
      boardId: column.boardId,
      columnId: column.id,
      title: valueTextArea
    }
    let newColumn = { ...column };
    newColumn.cards = [...newColumn.cards, newCard];
    newColumn.cardOrder = newColumn.cards.map(card => card.id)
    onUpdateColumn(newColumn)
    setValueTextArea('')
    setShowAddNewCard(false)
  }


  return (
    <>
      <div className="column">
        <header className="column-drag-handle">
          <div className="column-title">
            <Form.Control
              size={"sm"}
              type="text"
              value={titleColumn}
              className="customize-input-column"
              onClick={selectAllText}
              onChange={(event) => setTitleColumn(event.target.value)}
              spellCheck='false'
              onBlur={handleClickOutside}
              onMouseDown={(e) => e.preventDefault()}
              ref={inputRef}
            />
          </div>
          <div className="column-dropdown">
            <Dropdown>
              <Dropdown.Toggle className='dropdown-toggle' variant="" id="dropdown-basic" size="sm">
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Add card...</Dropdown.Item>
                <Dropdown.Item onClick={toggleModal}>Remove this column...</Dropdown.Item>
                <Dropdown.Item href="#">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>


        </header>
        <div className="card-list">
          <Container
            groupName="col"
            onDrop={(dropResult) => onCardDrop(dropResult, column.id)}
            getChildPayload={index => cards[index]}
            dragClass="card-ghost"
            dropClass="card-ghost-drop"
            onDropReady={p => console.log('Drop ready: ', p)}
            dropPlaceholder={{
              animationDuration: 150,
              showOnTop: true,
              className: 'card-drop-preview'
            }}
            dropPlaceholderAnimationDuration={200}
          >

            {cards && cards.length > 0 && cards.map((card, index) => {
              return (
                <Draggable key={card.id}>
                  <Card
                  onUpdateColumn={onUpdateColumn}
                    column={column}
                    card={card}
                  />
                </Draggable>
              )
            })
            }
          </Container>
        </div>
        {
          showAddNewCard === false ?
            <footer>
              <div className="footer-action" onClick={() => setShowAddNewCard(true)}>
                <i className="fa fa-plus icon "></i>
                Add another card
              </div>
            </footer>
            :
            <div className="add-new-card">
              <textarea
                rows={2}
                className="form-control"
                placeholder="Enter a title for this card..."
                ref={textAreaRef}
                value={valueTextArea}
                onChange={(event) => setValueTextArea(event.target.value)}
              >
              </textarea>
              <div className="group-btn">
                <button
                  className="btn btn-primary"
                  onClick={() => handleAddNewCard()}
                >Add Card</button>
                <i className="fa fa-close" onClick={() => setShowAddNewCard(false)}></i>
              </div>
            </div>
        }

      </div>
      <ConfirmModal
        show={showModalDelete}
        title={"Remove a column ?"}
        content={`Are you sure to remove this column: ${column.title}`}
        onAction={onModalAction}
      />
    </>
  )
}

export default Column;