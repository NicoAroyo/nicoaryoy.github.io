import React from "react";
import { BigText, MediumText } from "../components/Text/Text";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";

const HomeView = () => {
const navigate = useNavigate();
  return (
    <>
      <BigText>Welcome</BigText>
      <MediumText>
        My name is Nico Aroyo, <br></br>I am a full-stack developer. <br></br>{" "}
        <br></br>
        Passionate about crafting innovative web solutions with knowledge
        <br></br>in frontend and backend technologies.
      </MediumText>
      <Button onClick={() => navigate("/about")}>Learn More</Button>
      <br/>
      <br/>
      <br/>
    </>
  );
};

export default HomeView;
