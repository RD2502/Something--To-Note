import React , {useState} from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import CreateArea from "./CreateArea"

function App() {
 const[notes,setNotes]=useState([]);
 function addNote(newNote)
 {
    setNotes(prevNote=>{
        return[...prevNote,newNote]
    });
 }
 function deleteNote(id)
 {
    setNotes(prevNote=>{
        return prevNote.filter((notesItem,index)=>{
            return index!==id;
        });
    });
 }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((notesItem,index)=>(
        < Note
        key={index}
        id={index}
        title={notesItem.title}
        content={notesItem.content}
        onDelete={deleteNote} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
