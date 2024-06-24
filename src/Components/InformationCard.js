import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function InformationCard(props) {
  return (
    <div className="info-cards">
      <div>
        <span className="info-card-icon">
          <FontAwesomeIcon className="info-fa-icon" icon={props.icon} />
        </span>
        <p className="info-card-title">{props.title}</p>
        <p className="info-card-description">{props.description}</p>
      </div>
      <div>
        <a href="#" className="more_content_about">
          Read More →
        </a>
      </div>
    </div>
  );
}

export default InformationCard;
