import Header from "./components/Header.jsx";
import Entry from "./components/Entry.jsx";
import data from "./components/data.js";

const entryElement = data.map((en)=>{
  return <Entry
    img = {en.img}
    title = {en.title}
    country = {en.country}
    googleMapsLink = {en.googleMapsLink}
    dates = {en.dates}
    text = {en.text}
    
  />
})
function App() {

  return (
    <>
    <Header></Header>
    {entryElement}
    
  </>
  )
}

export default App
