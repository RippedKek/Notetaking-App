import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import NoteCard from "../../components/Cards/NoteCard";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="container mx-auto">
        <NoteCard
          title="Meeting"
          date="3rd April 2024"
          content="ASDDDD"
          tags="meeting"
          isPinned={true}
          onEdit={() => console.log("Edit")}
          onDelete={() => console.log("Delete")}
          onPinNote={() => console.log("Pin")}
        />
      </div>
    </>
  );
};

export default Home;
