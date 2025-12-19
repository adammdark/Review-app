import { createContext, useEffect, useState } from "react";
import axios from "axios";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children})=>{

  const [type,setType] = useState("");
  const [message,setMessage] = useState("");
  const [showalert,setShowalert] = useState(false);
  const [feedback,setFeedback] = useState([]);   
  const API_URL = import.meta.env.VITE_API_URL;

  const fetchFeedback = async ()=>{
    
    const response = await axios.get(`${API_URL}/posts`);
    setFeedback(response.data.reverse());
  }

  useEffect(()=>{
    fetchFeedback();
  },[]);

  const [feedbackEdit, setFeedbackEdit] = useState({

    item:{},
    edit:false
  })
  

  // Edit feedback
  const editFeedback = (item)=>{

   setFeedbackEdit({
    item:item,
    edit:true
   })
  }

  //Add feedback
  const addFeedback = async (newFeedback)=>{
    
    const response = await axios.post(`${API_URL}/posts`,newFeedback);
    setFeedback([response.data,...feedback]);
    setType("success");
    setMessage("Review Added Succesfuly");
    setShowalert(true);
    setTimeout(()=>{
      setShowalert(false);
    },2000);
  }


  //Update feedback
  const updateFeedback = async (id,updItem)=>{
    
    const response = await axios.put(`${API_URL}/posts/${id}`,updItem);

    setFeedback(
      feedback.map((item)=>(item.id === id)? {...item,...updItem}: item)
    );
    setType("success");
    setMessage("Review Updated Succesfuly");
    setShowalert(true);
    setTimeout(()=>{
      setShowalert(false);
    },2000);
  }


  // Delete feedback
  const deleteFeedback = async (id) =>{
    if(window.confirm("Are You Sure")){
      await axios.delete(`${API_URL}/posts/${id}`)
      setFeedback(
        feedback.filter(item=> item.id!==id)
      )
      setType("info");
      setMessage("Review Deleted Succesfuly");
      setShowalert(true);
      setTimeout(()=>{
        setShowalert(false);
      },2000);
    }
  }

  const resetEditStatus = ()=>{
    setFeedbackEdit(
      {
        item:{},
        edit:false
      }
    );
  }
    
  return <FeedbackContext.Provider value={{
        feedback, 
        deleteFeedback, 
        addFeedback,
        feedbackEdit,
        editFeedback,
        updateFeedback,
        resetEditStatus,
        type,
        message,
        showalert
    }}>
        {children}
    </FeedbackContext.Provider>
    
}

export default FeedbackContext;