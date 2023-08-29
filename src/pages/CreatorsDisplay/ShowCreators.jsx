import React from 'react';
import { useState, useEffect } from 'react';
import supabase from '../../client';
import "./ShowCreators.css";
import CreatorCard from "../../components/CreatorCards/CreatorCard";

const ShowCreators = () => {
    const [data, setCreators] = useState([]);

    async function fetchCreators() {
        try {
            const { data: creators, error } = await supabase.from('creators').select('*');
            setCreators(creators);
            console.log(creators);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchCreators();
    }, [])

    return (
        <>
            <div className="creator-container">
                {data.length === 0 ? (
                    <p className="empty-message">No creators found</p>
                ) : (
                    data.map((creator, idx) => (
                        <CreatorCard
                            key={idx}
                            id={creator.id}
                            name={creator.name}
                            description={creator.description}
                            imageURL={creator.imageURL}
                            youtubeHandle={creator.youtubeHandle}
                            twitterHandle={creator.twitterHandle}
                            instagramHandle={creator.instagramHandle}
                        />
                    ))
                )}
            </div>
        </>
    )
}

export default ShowCreators