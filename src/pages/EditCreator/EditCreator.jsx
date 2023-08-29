import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import supabase from '../../client';
import CreatorInput from "../../components/CreatorInput/CreatorInput";
import DeleteCreator from "../../components/DeleteCreator/DeleteCreator";
import './EditCreatorStyles.css'
import '@picocss/pico'

const EditCreator = (props) => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');
  const [name, setName] = useState(queryParams.get('name'));
  const [imageURL, setImage] = useState(queryParams.get('imageURL'));
  const [description, setDescription] = useState(queryParams.get('description'));
  const [youtubeHandle, setYoutube] = useState(queryParams.get('youtubeHandle'));
  const [twitterHandle, setTwitter] = useState(queryParams.get('twitterHandle'));
  const [instagramHandle, setInstagram] = useState(queryParams.get('instagramHandle'));

  const [showModal, setShowModal] = useState(false);

    const handleDeleteButtonClick = () => {
        setShowModal(true);
    };

    const handleCancel = () => {
        setShowModal(false);
    };

  async function editCreator(e) {
    e.preventDefault();

    const { data, error } = await supabase
      .from('creators')
      .update({
        name: name,
        imageURL: imageURL,
        description: description,
        youtubeHandle: youtubeHandle,
        twitterHandle: twitterHandle,
        instagramHandle: instagramHandle
      })
      .eq('id', id)
      .select()

    if (error) {
      console.error('Error updating creator:', error.message);
      return;
    }

    window.location.href = '/';
  };

  return (
    <>
      <CreatorInput
        creatorData={{
          name,
          imageURL,
          description,
          youtubeHandle,
          twitterHandle,
          instagramHandle,
        }}
        setCreatorData={{
          setName,
          setImage,
          setDescription,
          setYoutube,
          setTwitter,
          setInstagram,
        }}
      />

      <div className="button-container">
        <button
          className="modify-button"
          style={{ backgroundColor: "#3b8adf" }}
          onClick={editCreator}
        >
          Submit
        </button>
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

export default EditCreator;
