import React, {useState} from "react";
function CreateArea(props)
{
    const[note,setNote]=useState({
        title:" ",
         content:" "
    });

    function handleChange(event)
     {
       const{name,value}=event.target;
       setNote(prevNote=>{
        return{...prevNote, [name]:value};
       });
    }

    function onSubmit(event)
    {
        props.onAdd(note);
        setNote({
            title:" ",
            content:" "
        });
        event.preventDefault();

    }

    return(
        <div>
            <form>
                <h3>Title</h3>
                <input 
                 name="title"
                 onChange={handleChange}
                 value={note.title}
                 placeholder="Title" />
                 <h3>Content</h3>
                 <textarea
                 name="content"
                 onChange={handleChange}
                 value={note.content}
                 placeholder="Content"
                 rows="3"/>
                 <button onClick={onSubmit}>Add</button>
            </form>
        </div>
    )
}

export default CreateArea