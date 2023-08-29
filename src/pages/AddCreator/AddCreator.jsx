import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import CreatorInput from "../../components/CreatorInput/CreatorInput";
import supabase from '../../client';
import './AddCreatorStyles.css'
import '@picocss/pico'

const AddCreator = () => {

  const [name, setName] = useState("");
  const [imageURL, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [youtubeHandle, setYoutube] = useState("");
  const [twitterHandle, setTwitter] = useState("");
  const [instagramHandle, setInstagram] = useState("");


  async function addCreator(e) {
    e.preventDefault();

    const uniqueId = uuidv4();
    const { data, error } = await supabase
      .from('creators')
      .insert([
        {
          id: uniqueId,
          name: name,
          imageURL: imageURL,
          description: description,
          youtubeHandle: youtubeHandle,
          twitterHandle: twitterHandle,
          instagramHandle: instagramHandle
        },
      ])
      .select()

    if (error) {
      console.error('Error inserting creator:', error.message);
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
      <button type="submit" onClick={addCreator}>
        Submit
      </button>
    </>
  )
}

export default AddCreator;
