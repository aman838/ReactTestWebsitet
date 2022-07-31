import React from "react"
import Home from "../Pages/Home"
import { BrowserRouter as Router ,Routes, Route ,} from "react-router-dom"
import TodoHome from "../Pages/Todo"

const RouteComponent=()=>{

    return(
        <Router>
            <Routes>
                <Route exact path="/" element={ <Home/> } />
                <Route exact path= "/TodoPage" element={<TodoHome/>}/>
            </Routes>
            
        </Router>
      )
}
export default RouteComponent