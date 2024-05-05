import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { SignUp } from "./pages/SignUp";
import { Profile } from "./pages/Profile";
import { Login } from "./pages/Login";
import Header from "./components/Header";
import Apod from "./pages/Apod";
import EpicImages from "./pages/EpicImages";
import MarsWeatherInfo from "./pages/MarsWeatherInfo";
import MarsRoverPhotos from "./pages/MarsRoverPhotos";

export default function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/apod" element={<Apod />}></Route>
        <Route path="/epic-img" element={<EpicImages />}></Route>
        <Route path="/mars-info" element={<MarsWeatherInfo />}></Route>
        <Route path="/mars-photos" element={<MarsRoverPhotos />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
