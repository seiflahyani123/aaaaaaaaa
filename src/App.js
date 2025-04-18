import { useState } from "react";
import "./App.css";

function App() {
  //const person={fullName:"7ayawen" ,bio:"aa", imgSrc:"https://thumbs.dreamstime.com/b/moroccan-dankey-smiling-camper-dankey-lying-earth-moroccan-vilage-170538785.jpg", profession:"ye7mel"},
  const [person] = useState({
    fullName: "7ayawen",
    bio: "aa",
    imgSrc:
      "https://thumbs.dreamstime.com/b/moroccan-dankey-smiling-camper-dankey-lying-earth-moroccan-vilage-170538785.jpg",
    profession: "ye7mel",
  });
  // const f = () => {
  //   return setperson("");
  // };
  const [vrai, setvari] = useState(true);
  const v = () => {
    if (vrai) {
      return setvari(false);
    } else {
      return setvari(true);
    }
  };
  return (
    <div className="App">
      <button onClick={v}>show</button>
      {vrai && (
        <div>
          <h1>{person.fullName}</h1>
          <h1>{person.bio}</h1>
          <img src={person.imgSrc} />
          <h1>{person.profession}</h1>
        </div>
      )}
    </div>
  );
}
export default App;
