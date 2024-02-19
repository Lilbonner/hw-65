import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axiosApi from "../axiosApi.tsx";

const Page = () => {
    const location = useLocation();
    const [content, setContent] = useState("");
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPageContent = async () => {
            try {
                const pageName = location.pathname.replace("/pages/", "").replace(".json", "");
                const response = await axiosApi.get(`/pages/${pageName}.json`);
                if (response.data && response.data.content) {
                    setContent(response.data.content);
                } else {
                    setError("Page content not found.");
                }
            } catch (error) {
                console.error("Error fetching page content:", error);
                setError("Error fetching page content. Please try again.");
            }
        };

        fetchPageContent();

        return () => {};
    }, [location.pathname]);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="bg-orange-300 h-96">
            <h2 className="text-4xl font-bold pl-20 pt-14 pb-10 bg-orange-400 flex rounded-md">{location.pathname.replace("/pages/", "").replace(".json", "")}</h2>
            <p className="text-3xl font-bold pl-20 pt-14 pb-10  flex rounded-md">{content}</p>
        </div>
    );
};

export default Page;
