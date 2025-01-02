import "./Navigation.css";
import blogIcon from "../../../../assets/images/blog.svg";
import startIcon from "../../../../assets/images/star.svg";
import settingsIcon from "../../../../assets/images/settings.svg";



export const Navigation = () => {
  return (
    
    <nav className="nav">
        <a href="/"  className="active">
        <img src={blogIcon} alt="Task" /><span>Task board</span></a>
        
        <a href="/">
        <img src={startIcon} alt="Star" /><span>Favorite</span></a>
        
        <a href="/">
        <img src={settingsIcon} alt="Settings" /> <span>Settings</span></a>
       
    </nav>
  )
}
