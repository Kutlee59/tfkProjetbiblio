import React from "react";
import Navigation from "../../components/navigation/Navigation";
import './home.css'

function Home() {
  return (
    <>
    <main>
    <div className="bgdimg">
      <Navigation/>
      
      <h2>Bibliothèque</h2>
      <p>
        
        Lire, c’est boire et manger. L’esprit qui ne lit pas maigrit comme le
        corps qui ne mange pas. <br />
        Lire, c’est voyager ; voyager, c’est lire. <br /> (Citation de Victor
        Hugo)
      </p>
      </div>

   </main>
    </>
  );
}

export default Home;
