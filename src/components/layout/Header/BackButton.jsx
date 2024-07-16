import React from "react";
import { useNavigate } from "react-router-dom";
import BackIcon from "../../../assets/icons/BackIcon";

function BackButton({ isPainted }) {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)}>
      <BackIcon fill={isPainted ? "#ffffff" : ""} />
    </button>
  );
}

export default BackButton;
