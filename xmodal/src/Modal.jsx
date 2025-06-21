import { useState } from "react";
import "./modal.css"
function Modal(){
    const [showModal, setshowModal] = useState(false);
    const handleValidation = (e)=>{
        e.preventDefault();
        if( (!(e.target[2].value.toString().length === 10))) {
              alert("Invalid phone number. Please enter a 10-digit phone number.");
            return;
        }
        const currentDate = new Date();
        if(currentDate.toISOString().split('T')[0] < e.target[3].value){
            alert("Invalid date of birth. Date of birth cannot be in the future.");
            return;
        }
        setshowModal(false);
    }
    return(
        <div>
            <div style={{display:"flex",flexDirection:"column", alignItems:"center"}}>
                <h1>User Details Modal</h1>
            <button onClick={()=>{setshowModal(true)}}>Open Form</button>
            </div>
            { showModal && <div  className="modal" onClick={()=>{setshowModal(false)}} >
            <div  className="modal-content" onClick={(e)=>e.stopPropagation()}>
                
                <form onSubmit={handleValidation}>
                <h2>Fill Details</h2>
                <label htmlFor="username">Username:</label>
                <input  className="inp" id="username" type="text" required />
                <label htmlFor="email">EmailAddress:</label>
                <input className="inp" id="email" type="email" required />
                <label htmlFor="dob">Phone Number:</label>
                <input className="inp" id="dob" type="text" required/>
                <label htmlFor="phone">Date of Birth:</label>
                <input className="inp" id="phone" type="date" required/>
                <button type="submit" className="submit-button">Submit</button>
                </form>
                
            </div>
        </div>}
        </div>
        
    )
}

export default Modal;