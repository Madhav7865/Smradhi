import React, { useState } from "react";
import { Link } from "react-router-dom";
import bed from "./images/bed.jpg";
function Final() {
  const [showPhoto, setShowPhoto] = useState(false);

  const handleButtonClick = () => {
    setShowPhoto(!showPhoto);
  };

  return (
    <div>
      <div className="finaltext container">
        Ladiesss and Gentlemen let me introduce you to a very special person.
        Smardhi Verma, or gungun or samriddhi or sehradhi naam tere change hote
        honge but it doesnt change who you are a True friend, Excellent sister
        and an Amazing daughter and out of all ek bahut bahut Pyaari si Strong
        si ladki. Smradhi literally tujhse se hi sikha logon ka khyaal rakhna
        but jis terah you take care i dont think koi aur kar paayega. Bahut kuch
        sikha aur janna hai tujhse kaise respect karna, trust karna , kaise baat
        karna aur abhi bhi i see and learn. I am Proud of you of all your phases
        you have gone through. 14th Sept would be a special date of our
        friendship where it all started from . I know thoda ups and downs dekha
        hai humne but i guess at last sab kuch hua so that we can enjoy this
        present abhi ka. Kya hi tha mai ek awaara sa ladka type but sudhaar diya
        hai. Mai bedsheet lagaane lag gya hoo dekh rhi hai kitna change ho gya
        hoo
        <button className="proof-button" onClick={handleButtonClick}>
          Proof
        </button>
        . Lucknow ki chaat ki terah baatein bhi ek dum chatpatti karti hai. Yaad
        rakhna Mujhe Singaporian chowmein khaana hai. Tera kisi joke ko bolne se
        pehle hi hass dena .Hum sab ko wait karna padhta hai kab iska hasna ho
        jaaye. EK cheez i feel grateful about is that joh bahar ek Smradhi
        dekhta tha but andar i have got to know that Strong and Bold Smradhi. Tu
        rod se logon ko pitt deti hai, ek dum befikar hokar dance karti hai aur
        gaati tu joh hai.....ohhhoooo yrr tum toh full hindi film hero ho
        dude!!!. Abhi ek baar meri taraf dekh smile kar de ab. Yesss this smile
        Never let this smile disappear because your smile is much more worth
        than this world. Ab Aisa speech likha hai taali to baja de.
        {/* Button added here */}
      </div>
      <Link to="/actor">
        <button className="button-back mb-3">BACK</button>
      </Link>
      {showPhoto && (
        <div className="overlay" onClick={handleButtonClick}>
          <div className="photo-container">
            <img src={bed} alt="Proof" onClick={(e) => e.stopPropagation()} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Final;
