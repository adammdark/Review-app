import React, { useContext, useEffect, useState } from 'react'
import Card from './shared/Card'
import Button from "./shared/Button"
import FeedbackContext from '../context/FeedbackContext'


const FeedbackForm = () => {
  
  const {addFeedback,feedbackEdit,updateFeedback,resetEditStatus} = useContext(FeedbackContext);
  const [text,setText] = useState("");
  const [btnDisable,setBtnDisable] = useState(true);
  const [message,setMessage] = useState("");

  useEffect(()=>{
    if(feedbackEdit.edit === true){
      setBtnDisable(false);
      setText(feedbackEdit.item.text);
    }

  },[feedbackEdit]);

  const handleTextChange = (e)=>{

    if(text === ""){
      setBtnDisable(true);
      setMessage(null);

    }else if(text!== "" && text.trim().length<=10){
      setBtnDisable(true);
      setMessage("Text must be at least 10 characters");

    }else{
      setBtnDisable(false);
      setMessage(null);
    }

    setText(e.target.value);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    
    if(text.trim().length>=10){

      const newFeedback = {
        text:text
      }
      
      if(feedbackEdit.edit === true){
        updateFeedback(feedbackEdit.item.id, newFeedback);
      }
      else{
        addFeedback(newFeedback);
      }
      resetEditStatus();
      setText("");
      setMessage(null);
      setBtnDisable(true);
    }

    
  }


  return (
    
   <Card>
      <form onSubmit={handleSubmit}>
        <h3>Add Your Review</h3>
        <div className="input-group">
            <input name="review" value={text} onChange={handleTextChange} type="text" placeholder='Write Your review'/>
            <Button version="primary" type="submit" isDisabled={btnDisable}>
              send
            </Button>
        </div>
        {message && (<p className='error'>{message}</p>)}
      </form>
   </Card>
  )
}

export default FeedbackForm