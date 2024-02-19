import React, { useState } from "react";
import axiosApi from "../axiosApi.tsx";

const Edit = () => {
    const [pageName, setPageName] = useState("");
    const [newContent, setNewContent] = useState("");
    const [error, setError] = useState<string | null>(null);

    const handlePageChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedPage = event.target.value;
        setPageName(selectedPage);

        try {
            const response = await axiosApi.get(`/pages/${selectedPage}.json`);
            setNewContent(response.data.content || "");
        } catch (error) {
            console.error("Error fetching page content:", error);
            setError("Error fetching page content. Please try again.");
        }
    };

    const handleSave = async () => {
        try {
            await axiosApi.patch(`/pages/${pageName}.json`, { content: newContent });
            window.location.href = `/pages/${pageName}`;
        } catch (error) {
            console.error("Error updating page content:", error);
            setError("Error updating page content. Please try again.");
        }
    };

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="w-80">
            <h2 className="font-bold text-2xl ml-2 mt-14">Edit Page</h2>
            <select className="ml-2 rounded-md mt-14 h-12" value={pageName} onChange={handlePageChange}>
                <option value="">Select a Page</option>
                <option value="Home">Home</option>
                <option value="About">About</option>
                <option value="Contacts">Contacts</option>
                <option value="Divisions">Divisions</option>
                <option value="Portfolio">Portfolio</option>
            </select>
            <textarea className="ml-2 rounded-md mt-14 h-36 w-80" value={newContent} onChange={(e) => setNewContent(e.target.value)} />
            <button className="w-32 h-12 mt-14 ml-2 bg-gray-400" onClick={handleSave}>Save</button>
        </div>
    );
};

export default Edit;
