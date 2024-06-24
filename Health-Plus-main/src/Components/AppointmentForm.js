import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";

function AppointmentForm({ addAppointment }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [form, setForm] = useState({
    name: "",
    Number: "",
    gender: "default",
    date: "",
    time: "",
    doctor: "default",
    call: "default",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    const errors = {};
    if (!form.name.trim()) {
      errors.patientName = "Patient name is required";
    } else if (form.name.trim().length < 8) {
      errors.patientName = "Patient name must be at least 8 characters";
    }

    if (!form.Number.trim()) {
      errors.patientNumber = "Patient phone number is required";
    } else if (form.Number.trim().length !== 10) {
      errors.patientNumber = "Patient phone number must be of 10 digits";
    }

    if (form.gender === "default") {
      errors.patientGender = "Please select patient gender";
    }

    if (!form.date) {
      errors.appointmentTime = "Appointment time is required";
    } else {
      const selectedTime = new Date(form.date).getTime();
      const currentTime = new Date().getTime();
      if (selectedTime <= currentTime) {
        errors.appointmentTime = "Please select a future appointment time";
      }
    }

    if (form.call === "default") {
      errors.preferredMode = "Please select preferred mode";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Reset form fields and errors after successful submission
    setForm({
      name: "",
      Number: "",
      gender: "default",
      date: "",
      time: "",
      doctor: "default",
      call: "default",
    });
    setFormErrors({});

    toast.success("Appointment Scheduled !", {
      position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });

    addAppointment(form);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="appointment-form-section">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Health <span className="legal-siteSign">Grades</span>
        </Link>
      </h1>

      <div className="form-container">
        <h2 className="form-title">
          <span>Book Appointment Online</span>
        </h2>

        <form className="form-content" onSubmit={handleSubmit}>
          <label>
            Patient Full Name:
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
            {formErrors.patientName && (
              <p className="error-message">{formErrors.patientName}</p>
            )}
          </label>

          <br />
          <label>
            Patient Phone Number:
            <input
              type="text"
              name="Number"
              value={form.Number}
              onChange={handleChange}
              required
            />
            {formErrors.patientNumber && (
              <p className="error-message">{formErrors.patientNumber}</p>
            )}
          </label>

          <br />
          <label>
            Patient Gender:
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              required
            >
              <option value="default">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="private">I will inform Doctor only</option>
            </select>
            {formErrors.patientGender && (
              <p className="error-message">{formErrors.patientGender}</p>
            )}
          </label>

          <br />
          <label>
            Doctor:
            <select
              name="doctor"
              value={form.doctor}
              onChange={handleChange}
              required
            >
              <option value="default">Select</option>
              <option value="Dr. John Smith">Dr. John Smith</option>
              <option value="Dr. Emily Johnson">Dr. Emily Johnson</option>
              <option value="Dr. Sarah Davis">Dr. Sarah Davis</option>
              <option value="Dr. William Wilson">Dr. William Wilson</option>
              <option value="Dr. Linda Martinez">Dr. Linda Martinez</option>
              <option value="Dr. Jennifer Anderson">
                Dr. Jennifer Anderson
              </option>
            </select>
            {formErrors.doctor && (
              <p className="error-message">{formErrors.doctor}</p>
            )}
          </label>

          <br />
          <label>
            Preferred Appointment Time:
            <input
              type="datetime-local"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
            />
            {formErrors.appointmentTime && (
              <p className="error-message">{formErrors.appointmentTime}</p>
            )}
          </label>

          <br />
          <label>
            Preferred Mode:
            <select
              name="call"
              value={form.call}
              onChange={handleChange}
              required
            >
              <option value="default">Select</option>
              <option value="voice">Voice Call</option>
              <option value="video">Video Call</option>
            </select>
            {formErrors.preferredMode && (
              <p className="error-message">{formErrors.preferredMode}</p>
            )}
          </label>

          <br />
          <button type="submit" className="text-appointment-btn">
            Confirm Appointment
          </button>

          <p
            className="success-message"
            style={{ display: isSubmitted ? "block" : "none" }}
          >
            Appointment details have been sent to the patient's phone number via
            SMS.
          </p>
        </form>
      </div>

      <div className="legal-footer">
        <p>© 2013-2023 Health+. All rights reserved.</p>
      </div>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default AppointmentForm;
