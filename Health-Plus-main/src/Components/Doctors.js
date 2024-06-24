import React, { useState, useEffect } from "react";
import DoctorCard from "./DoctorCard";

import "../Styles/Doctors.css";
import { fatch_data_doctor } from "./Strapi";
function Doctors() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fatch_data_doctor(); // Assuming this function is defined elsewhere
        setProfiles(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.log(error.message);
        setProfiles([]);
      }
    };
    fetchProfileData();
  }, []);

  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Doctors</span>
        </h3>

        <p className="dt-description">
          Meet our exceptional team of specialist doctors, dedicated to
          providing top-notch healthcare services at Health Plus. Trust in their
          knowledge and experience to lead you towards a healthier and happier
          life.
        </p>
      </div>

      <div className="dt-cards-content">
        {profiles.map((profile, index) => (
          <DoctorCard
            key={index}
            img={profile.attributes.image}
            name={profile.attributes.name}
            title={profile.attributes.doc_type}
            lastname={profile.attributes.lastName}
            stars={profile.attributes.stars}
            reviews={profile.attributes.reviews}
            routerId={profile.id} // Pass the router ID as a prop
          />
        ))}
      </div>
    </div>
  );
}

export default Doctors;
