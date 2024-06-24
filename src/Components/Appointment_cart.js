import React from "react";
import "../Styles/Appoint_cart.css";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

const AppointmentCart = ({ appointments, removeAppointment }) => {
  return (
    <div>
      <div className="title_most">
        <div className="content_cart_set">
          <div className="container_overlay_c">
            <h2 className="cart_title">Appointment Cart</h2>
            <Link to="/" className="size_discr">
              Home |
            </Link>
            <span className="size_discr">Appointment Cart</span>
          </div>
        </div>
      </div>
      <ul className="set_style">
        <div className="display_none">
          <h2>All Item</h2>
          <div className="table_container">
            <ul className="list_of_item_cart">
              <li>Name</li>
              <li>Date</li>
              {/* <li>Time</li> */}
              <li>Number</li>
              <li>Gender</li>
              <li>Docto Name</li>
              <li>Remove</li>
            </ul>
          </div>
        </div>
        {appointments.map((appointment, index) => (
          <div>
            <div className="table_container" key={index}>
              <ul className="list_of_item_cart">
                {/* <li key={index} className="list_ofname"> */}
                <li>{appointment.name} </li>
                <li>{appointment.date}</li>
                {/* <li>{appointment.time}</li> */}
                <li>{appointment.Number}</li>
                <li>{appointment.gender}</li>
                <li>{appointment.doctor}</li>
                <li>
                  <button onClick={() => removeAppointment(index)}>
                    Remove
                  </button>
                </li>

                {/* </li> */}
              </ul>
            </div>
          </div>
        ))}
      </ul>
      <Footer />
    </div>
  );
};

export default AppointmentCart;
