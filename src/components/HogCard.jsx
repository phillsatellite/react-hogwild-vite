import React, {useState} from "react";

function HogCard({ hog }) {
  const [showDetails, setShowDetails] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  //If card is hidden, show "show me" button
  if (isHidden) {
    return (
      <button onClick={() => setIsHidden(false)} className="ui button">
        Show Me
      </button>
    );
  }

  return (
    <div
      className="ui card"
      aria-label="hog card"
      onClick={() => setShowDetails(!showDetails)}
    >
        {/* Hog name */}
      <div className="content">
        <h3 className="header">{hog.name}</h3>
      </div>

        {/* Hog image */}
      <div className="image">
        <img alt={`Photo of ${hog.name}`} src={hog.image} />
      </div>

        {/* Hog details with hide button */}
      <div className="extra content">
        <button
          onClick={e => {
            e.stopPropagation();
            setIsHidden(true);
          }}
          className="ui button"
        >
          Hide Me
        </button>
      </div>

          {/* If showDetails is true then show details */}
      {showDetails && (
        <div className="content">
          <p>Specialty: {hog.specialty}</p>
          <p>{hog.greased ? "Greased" : "Nongreased"}</p>
          <p>{hog.weight}</p>
          <p>{hog["highest medal achieved"]}</p>
        </div>
      )}
    </div>
  );
}

export default HogCard;