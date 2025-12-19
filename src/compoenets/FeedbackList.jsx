import React, { useContext } from 'react'
import Feedback from './Feedback'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackList = () => {

    const {feedback} = useContext(FeedbackContext);

    if(feedback.length === 0){
        return (
            <div className="container">
                <p>No Items in the List</p>
            </div>
        )
    }

   

   return(

    <div className='feedback-list'>
        {
            feedback.map((item)=>(
                <Feedback key={item.id} item={item}/>
            ))
        }
    </div>
   )
}

export default FeedbackList