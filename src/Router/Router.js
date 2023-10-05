import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignupPage";
import HomePage from "../pages/HomePage/HomePage";

export default function Router() {
    return (
        <BrowserRouter>
        
            <Routes>
                
                <Route path="/home" element={<HomePage/>}/>
                <Route path="/signup" element={<SignUpPage/>}/>
                <Route path="/" element={<LoginPage/>}/>
                
            </Routes>

        </BrowserRouter>
    )
}