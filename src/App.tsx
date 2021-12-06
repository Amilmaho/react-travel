import React from "react";
import styles from "./App.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, RegisterPage, SignInPage, DetailPage } from "./pages";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signIn" element={<SignInPage/>}/>
        <Route path="/Register" element={<RegisterPage/>}/>
        <Route path="/detail/:touristRouteId" element={<DetailPage touristRouteId={""}/>}/>
        <Route path="/*" element={<h1>404 not found 页面不见了！</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
