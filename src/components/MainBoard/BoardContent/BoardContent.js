
import { initData } from "../../../actions/initData";
import "./BoardContent.scss";
import { Appbar } from '../Appbar/Appbar';
import { BoardBar } from '../BoardBar/BoardBar';
import _, { isEmpty } from "lodash";
import Column from "../Column/Column";
import { mapOrder } from "../../../utilities/Sorts";
import { useEffect, useRef, useState } from "react";
import { Container, Draggable } from 'react-smooth-dnd';
import { applyDrag } from "../../../utilities/dragDrop";
import { v4 as uuidv4 } from 'uuid';


export const BoardContent = () => {

  const [board, setBoard] = useState({});
  const [columns, setColumns] = useState([]);
 
  const [showAddList, setShowAddList] = useState(false);
  const inputRef = useRef(null);
  const [valueInput, setValueInput] = useState('');

  useEffect(() => {
    if (showAddList === true && inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showAddList]);

  useEffect(() => {
    const boardInitData = initData.boards.find(item => item.id === 'board-1');
    if (boardInitData) {
      setBoard(boardInitData)
      setColumns(mapOrder(boardInitData.columns, boardInitData.columnOrder, 'id'))
    }
  }, []);

  function onColumnDrop(dropResult) {

    let newColumns = [...columns];
    newColumns = applyDrag(newColumns, dropResult);

    let newBoard = { ...board };
    newBoard.columnOrder = newColumns.map(column => column.id);
    newBoard.columns = newColumns;

    setColumns(newColumns);
    setBoard(newBoard);
  }

  function onCardDrop(dropResult, columnId) {
    if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
      console.log(">>> onCardDrop: ", dropResult, ">>> columnId=", columnId);

      let newColumns = [...columns];
      let currentColumn = newColumns.find(column => column.id === columnId);

      currentColumn.cards = applyDrag(currentColumn.cards, dropResult);
      currentColumn.cardOrder = currentColumn.cards.map(card => card.id);
      setColumns(newColumns)

    }
  }

  if (isEmpty(board)) {
    return (
      <div className="not-found">
        Board not found
      </div>
    )
  }

  function handleAddList() {
    if (!valueInput) {
      if (inputRef && inputRef.current);
      inputRef.current.focus();
    }
    const _columns = _.cloneDeep(columns);
    _columns.push({
      id: uuidv4(),
      boardId: board.id,
      title: valueInput,
      cards: [],
    })
    setColumns(_columns)
    setShowAddList(false)
  }

function onUpdateColumn(newColumn){
const columnIdUpdate = newColumn.id;
let ncols = [...columns]; // original columns
let index = ncols.findIndex(item => item.id === columnIdUpdate)
if(newColumn._destroy){
  // remove column
ncols.splice(index, 1)
}else{
  // update title
  ncols[index] = newColumn;
}
setColumns(ncols)
}

console.log(columns)

  return (
    <>
      <div className='trello-master'>
        <Appbar />
        <BoardBar />
        <div className="board-content">
          <Container
            orientation="horizontal"
            onDrop={onColumnDrop}
            getChildPayload={index => columns[index]}
            dragHandleSelector=".column-drag-handle"
            dropPlaceholder={{
              animationDuration: 150,
              showOnTop: true,
              className: 'column-drop-preview'
            }}
          >
            {
              columns && columns.length > 0 && columns.map((column, index) => {
                return (
                  <Draggable key={column.id}>
                    <Column
                      column={column}
                      onCardDrop={onCardDrop}
                      onUpdateColumn={onUpdateColumn}
                      
                    />
                  </Draggable>
                )
              })}
             
            {showAddList === false ?

                <div className="add-new-column" onClick={() => setShowAddList(true)}>
                  <i className="fa fa-plus icon"></i>Add another column
                </div>
                :
                <div className="content-add-column">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter a title for this column..."
                    ref={inputRef}
                    value={valueInput}
                    onChange={(event) => setValueInput(event.target.value)}
                  />
                  <div className="group-btn">
                    <button
                      className="btn btn-success"
                      onClick={() => handleAddList()}
                    >
                      Add list
                    </button>
                    <i className="fa fa-close" onClick={() => setShowAddList(false)}></i>
                  </div>
                </div>
            }
         </Container>
        </div>

      </div>
    </>
  )
}
