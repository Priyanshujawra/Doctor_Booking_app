import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";

function DoctorCard(props) {
  const { routerId } = props; // Receive the router ID as a prop
  const params = useParams(); // Get the URL params

  return (
    <div className="dt-card">
      <img src={props.img} alt={props.name} className="dt-card-img" />
      <Link to={`/doctorpro/${routerId}`}>
        {" "}
        {/* Use the router ID to link to the full profile */}
        <p className="dt-card-name">
          {props.name} {props.lastname}
        </p>
      </Link>
      <p className="dt-card-title">{props.title}</p>
      <p className="dt-card-stars">
        <FontAwesomeIcon
          icon={faStar}
          style={{ color: "#F7BB50", paddingRight: "6px" }}
        />
        {props.stars}
        <span className="dt-card-reviews"> ({props.reviews}+ Reviews)</span>
      </p>
    </div>
  );
}

export default DoctorCard;
