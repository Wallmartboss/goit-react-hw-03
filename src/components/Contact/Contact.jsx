import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import s from './Contact.module.css'; 

const Contact = ({data: { id, name, number }, onDelete }) => {
    console.log(id, name, number);
    return (
        <div className={s.container}>
            <div className={s.userdata}>
                <div className={s.row}>
                    <span className={s.icon} ><FaUser /></span><p className={s.name}>{name}</p>
                </div>
                <div className={s.row}>
                    <span className={s.icon} >< FaPhone /></span> <p className={s.number}>{number}</p>
                </div>
            </div>
      <button className={s.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
    )
};
    
export default Contact;