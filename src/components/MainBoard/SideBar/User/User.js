import "./User.css";
import avatar from "../../../../assets/images/avatar.jpg";

export const User = () => {
  return (
    <section className='user'>
    <div className='avatar'>
        <img src={avatar} alt="avatar" />
    </div>
    <h3>Json</h3>
</section>
  )
}
