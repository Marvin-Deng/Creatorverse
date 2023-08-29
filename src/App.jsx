import { Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import ShowCreators from "./pages/CreatorsDisplay/ShowCreators";
import AddCreator from "./pages/AddCreator/AddCreator";
import EditCreator from "./pages/EditCreator/EditCreator";
import CreatorInfo from "./pages/CreatorInfo/CreatorInfo";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ShowCreators/>} />
        <Route path="/addCreator" element={<AddCreator/>} /> 
        <Route path="/editCreator" element={<EditCreator/>} /> 
        <Route path="/creatorInfo" element={<CreatorInfo/>} /> 
      </Routes>
    </>
  )
}
  
export default App
