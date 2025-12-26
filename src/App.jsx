import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./component/Register";
import Registeration_form from "./component/Registeration_form"
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/register-form" element = {<Registeration_form/>}/>
    </Routes>
  );
} 