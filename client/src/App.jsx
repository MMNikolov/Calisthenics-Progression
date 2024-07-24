import { Route, Routes } from "react-router-dom"

import Header from "./components/header/Header.jsx"
import Login from "./components/login/Login"
import Home from "./components/home/Home.jsx"
import Register from "./components/register/Register.jsx"
import ExerciseCreate from "./components/exercise-create/ExerciseCreate.jsx"
import ExerciseList from "./components/exercise-list/ExerciseList.jsx"
import ExerciseDetails from "./components/exercise-details/ExerciseDetails.jsx"

function App() {
  return (
    <div id="box">
        <Header/>

        <main id="main-content">
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/register" element={<Register />}/>
              <Route path="/exercises/" element={<ExerciseList />}/>
              <Route path="/exercises/:exerciseId/details" element={<ExerciseDetails />}/>

              <Route path="/exercises/create" element={<ExerciseCreate />}/>
            </Routes>
        </main>
    </div>
  )
}

export default App
