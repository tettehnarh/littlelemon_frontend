import React, { useEffect } from "react";
import Swal from "sweetalert2";

const ConfirmedBooking = () => {
  useEffect(() => {
    Swal.fire({
      title: "Booking has been scheduled",
      icon: "success",
      showConfirmButton: false,
      timer: 2000, // Adjust the timer as needed
    });
  }, []); // Run this effect only once when the component mounts

  return null; // Render nothing directly in the component
};

export default ConfirmedBooking;
