import './App.css';
import Navbar from "./components/Navbar";
import Page from "./Pages/Page.tsx";
import Edit from "./components/Edit";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/pages/*" element={<Page />} />
                <Route path="/pages/admin" element={<Edit />} />
            </Routes>
        </div>
    );
}

export default App;
