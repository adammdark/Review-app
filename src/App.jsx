import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./compoenets/Header"
import FeedbackList from "./compoenets/FeedbackList"
import FeedbackLength from "./compoenets/FeedbackLength"
import FeedbackForm from "./compoenets/FeedbackForm"
import { FeedbackProvider } from "./context/FeedbackContext"
import About from "./compoenets/About";

const App = () => {

  return (

    <BrowserRouter>
      <FeedbackProvider>
        <Header />
        <div className="container">
        <Routes>
          <Route path="/" element={
            <>
                <FeedbackForm />
                <FeedbackLength />
                <FeedbackList />
            </>
          }>
          </Route>
          <Route path="/about" element={<About/>}>
          </Route>
        </Routes>
        </div>
      </FeedbackProvider>
    </BrowserRouter>

  )
}



export default App

