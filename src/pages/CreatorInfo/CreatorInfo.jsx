import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
import DeleteCreator from "../../components/DeleteCreator/DeleteCreator";
import "./CreatorInfo.css";
import '@picocss/pico';

const CreatorInfo = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get('id');
    const name = queryParams.get('name');
    const description = queryParams.get('description');
    const imageURL = queryParams.get('imageURL');
    const youtubeHandle = queryParams.get('youtubeHandle');
    const twitterHandle = queryParams.get('twitterHandle');
    const instagramHandle = queryParams.get('instagramHandle');

    const [showModal, setShowModal] = useState(false);

    const handleDeleteButtonClick = () => {
        setShowModal(true);
    };

    const handleCancel = () => {
        setShowModal(false);
    };

    const youtubeButton = youtubeHandle ? (
        <a href={`https://youtube.com/@${youtubeHandle}`}>
            <button className="social-button">
                <FaYoutube size={30} style={{ color: "white", marginRight: "1rem" }} />
                <h4>@{youtubeHandle}</h4>
            </button>
        </a>
    ) : null;

    const twitterButton = twitterHandle ? (
        <a href={`https://twitter.com/@${twitterHandle}`}>
            <button className="social-button">
                <FaTwitter size={30} style={{ color: "white", marginRight: "1rem" }} />
                <h4>@{twitterHandle}</h4>

            </button>
        </a>
    ) : null;

    const instagramButton = instagramHandle ? (
        <a href={`https://instagram.com/${instagramHandle}`}>
            <button className="social-button">
                <FaInstagram size={30} style={{ color: "white", marginRight: "1rem" }} />
                <h4>@{instagramHandle}</h4>
            </button>
        </a>
    ) : null;

    return (
        <>
            <div className="info-container">
                <div className="info-image" style={{ backgroundImage: `url(${imageURL})` }} />

                <div className="right-column">
                    <h3 className="info-name">
                        {name}
                    </h3>
                    <p className="description">
                        {description}
                    </p>
                    {youtubeButton}
                    {twitterButton}
                    {instagramButton}
                </div>
            </div>
            <div className="button-container">
                <Link to={
                    `/editCreator?name=${name}&imageURL=${imageURL}&description=${description}&youtubeHandle=${youtubeHandle}&twitterHandle=${twitterHandle}&instagramHandle=${instagramHandle}&id=${id}`
                }
                >
                    <button
                        className="modify-button"
                        style={{ backgroundColor: "#3b8adf" }}
                    >
                        Edit
                    </button>
                </Link>

                <button
                    className="modify-button"
                    style={{ backgroundColor: "#db3434" }}
                    onClick={handleDeleteButtonClick}
                >
                    Delete
                </button>
            </div>

            {showModal && (
                <DeleteCreator
                    showModal={showModal}
                    onCancel={handleCancel}
                    id={id}
                />
            )}
        </>

    )
}

export default CreatorInfo