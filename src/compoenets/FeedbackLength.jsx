import React, { useContext, useState, useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import CustomAlert from "./shared/CustomAlert"


const FeedbackLength = () => {
  const {feedback,showalert} = useContext(FeedbackContext);
  return (
    <div className='container'>
        <h4 className='length'>length: ({feedback.length})</h4>
        <div>
         {showalert && <CustomAlert/>}
        </div>
    </div>
  )
}

export default FeedbackLength