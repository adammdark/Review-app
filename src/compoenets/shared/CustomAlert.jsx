import React, { useContext } from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import FeedbackContext from '../../context/FeedbackContext';

const CustomAlert = () => {
  const {type,message} = useContext(FeedbackContext)
  return (
   <>
     <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity={type}>{message}</Alert>
     </Stack>
   </>
  )
}

export default CustomAlert

