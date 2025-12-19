import { useContext, useState } from "react";
import Card from "./shared/Card";
import { FiTrash2 } from "react-icons/fi";
import FeedbackContext from "../context/FeedbackContext";
import { MdModeEdit } from "react-icons/md";

const Feedback = ({item}) => {
 
  const {deleteFeedback,editFeedback} = useContext(FeedbackContext);
  return (
    <Card>
      <div className="text-display">
        {item.text}
        <button className="delete" onClick={()=>deleteFeedback(item.id)}>
         <FiTrash2 color="red" size={20} />
        </button>
        <button className="edit">
           <MdModeEdit color="green" size={20} onClick={()=>editFeedback(item)}/>
        </button>
      </div>
    </Card>
    
  )
}

export default Feedback