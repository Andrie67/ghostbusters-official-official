import React from "react";
import Card from "../../components/Card.jsx";
import "./home.css";
import GhostLogo from '../../assets/ghostiee.png'; 

function Home() {
  const cardData = {
    cardData1: {
      title: "User View",
      description:
        "Monitor projects near you, view daily progress, and report issues directly",
      navigate: "Guest",
    },
    cardData2: {
      title: "Contractor and Admin", 
      description: "Manage reports, track projects, and resolve public issues.",
      navigate: "Editor",
    },
  };

  return (
    <>
      <div className="container">
        <img src={GhostLogo} alt="GhostBusters Logo" className="home-logo" /> 
        
        <h1>
          Ghost<span>Busters!</span>
        </h1>
        <p>Promote integrity. Track public funds.</p>
      </div>
      <section className="grid-container">
        <Card {...cardData.cardData1} />
        <Card {...cardData.cardData2} />
      </section>
    </>
  );
}

export default Home;
