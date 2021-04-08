import { Fragment, useState, useEffect } from "react";
import { addNote, lengthNote } from "../../dummyData";
import { Sidebar } from "../../ui/Sidebar";

export default function Id() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);

  function handleSave() {
    console.log("hi");
    const totalId = lengthNote();
    const newTotalId = totalId + 1;
    if (title.length != "" && description.length != "") {
      addNote(newTotalId, title, description);
      console.log("here");
      setError(null);
    } else {
      setError("phsssshhh beep boop");

      console.log("eror");
    }
  }

  return (
    <Fragment>
      <div style={{ maxHeight: "calc(100vh - 43px)", overflowY: "scroll" }}>
        <div
          style={{
            margin: "0 auto",
            textAlign: "center",
            margin: "0px 100px 0px 10px",
          }}
        >
          <input
            onChange={(e) => setTitle(e.target.value)}
            className='title'
            placeholder='Enter title'
          />
        </div>
        {console.log(title)}
        {console.log(description)}
        <div
          style={{
            margin: "0 auto",
            textAlign: "center",
            margin: "0px 100px 0px 10px",
          }}
        >
          <input
            onChange={(e) => setDescription(e.target.value)}
            className='description'
            placeholder='Thoughts'
            style={{
              width: "90%",
              fontSize: "25px",
              borderBottom: "1px solid #555",
              borderTop: "none",
              borderLeft: "none",
              borderRight: "none",
              outline: "none",
            }}
          />
        </div>
        <button onClick={handleSave}>Save</button>
        <p>{error}</p>
      </div>
    </Fragment>
  );
}

export { Id };
