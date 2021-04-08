import { useEffect } from "react";
import { useRouter } from "next/router";
import { Card } from "../components/Card";
import { addNote, lengthNote, getAllData, dummyData } from "../dummyData";
import { NewNote } from "../components/NewNote";

function Sidebar() {
  const router = useRouter();
  const total = lengthNote();
  const nextId = total + 1;

  const handleClick = (e) => {
    e.preventDefault();
    router.push(`http://localhost:3000/newnote/${nextId}`);
  };

  useEffect(() => {
    dummyData.map((item, i) => (
      <Card
        key={i}
        id={i + 1}
        title={item.title}
        description={item.description}
      />
    ));
  }, [total]);

  return (
    <div
      style={{
        // backgroundColor: "gray",
        maxHeight: "calc(100vh - 43px)",

        minHeight: "calc(100vh - 43px)",
        overflowY: "scroll",
        marginTop: "43px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <button onClick={handleClick}>New Note</button>
      <NewNote />
      {dummyData.map((item, i) => (
        <Card
          key={i}
          id={i + 1}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}

export { Sidebar };
