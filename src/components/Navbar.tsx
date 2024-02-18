import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex bg-green-800 h-16 text-white">
            <h2 className="text-2xl mt-4 ml-36 font-bold">Static Pages</h2>
            <div className="flex text-end ml-56">
                <NavLink className="text-1xl ml-36 mt-5" to="/pages" >Home </NavLink>
                <div className="ml-12 mt-5 text-black">|</div>
                <NavLink className="text-1xl ml-10 mt-5" to="/pages/About" >About </NavLink>
                <div className="ml-12 mt-5 text-black">|</div>
                <NavLink className="text-1xl ml-10 mt-5" to="/pages/Contacts" >Contacts </NavLink>
                <div className="ml-12 mt-5 text-black">|</div>
                <NavLink className="text-1xl ml-10 mt-5" to="/pages/Divisions" >Divisions </NavLink>
                <div className="ml-12 mt-5 text-black">|</div>
                <NavLink className="text-1xl ml-10 mt-5" to="/pages/Portfolio" >Portfolio </NavLink>
                <div className="ml-12 mt-5 text-black">|</div>
                <NavLink className="text-1xl ml-10 mt-5 text-black font-bold" to="/pages/Admin" >Admin</NavLink>
            </div>
        </div>
    );
};

export default Navbar;