
export const initData = {
    boards: [
        {
            id: 'board-1',
            columnOrder: ["column-1", "column-2", "column-3", "column-4"],
            columns: [
                {
                    id: "column-1",
                    boardId: "board-1",
                    title: "Todo",
                    cardOrder: ["card-1", "card-2"],
                    cards: [
                        
                    ]
                },
                {
                    id: "column-2",
                    boardId: "board-1",
                    title: "In Progress",
                    cardOrder: ["card-3", "card3"],
                    cards: [
                        
                    ]
                },
                {
                    id: "column-3",
                    boardId: "board-1",
                    title: "Testing",
                    cardOrder: ["card-5", "card-6"],
                    cards: [
                        
                    ]
                },
                {
                    id: "column-4",
                    boardId: "board-1",
                    title: "Done",
                    cardOrder: ["card-7", "card-8"],
                    cards: [
                        
                    ]
                }
            ]
        }
    ]
}

/*{
    id: "card-1",
    boardId: "board-1",
    columnId: "column-1",
    title: "Купить Мячи",
    description:"Card description",
    comment:"Card comment",
},
{
    id: "card-2",
    boardId: "board-1",
    columnId: "column-1",
    title: "card task 2",
    description:"Card description",
    comment:"Card comment",
}*/