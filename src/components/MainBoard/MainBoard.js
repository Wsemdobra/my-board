import { BoardContent } from "./BoardContent/BoardContent"
import { SideBar } from "./SideBar/SideBar"



export const MainBoard = ({setIsLoggedIn}) => {

    return (<>
            <SideBar setIsLoggedIn={setIsLoggedIn}/>
            <BoardContent setIsLoggedIn={setIsLoggedIn}/>
            </>
    )
}
