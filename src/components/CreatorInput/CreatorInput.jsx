import { FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import './CreatorInputStyles.css'
import '@picocss/pico'

const CreatorInput = ({creatorData, setCreatorData}) => {

  const { name, description, imageURL, youtubeHandle, twitterHandle, instagramHandle} = creatorData;
  const {setName, setImage, setDescription, setYoutube, setTwitter, setInstagram} = setCreatorData;

  return (
    <form className="input-form">
      <label htmlFor="name">
        Name
        <input
          type="text"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>

      <label htmlFor="image">
        Image
        <small>Provide a link to an image of your creator. Be sure to include the http://</small>
        <input
          type="text"
          id="image"
          value={imageURL}
          onChange={e => setImage(e.target.value)}
        />
      </label>

      <label htmlFor="description">
        Description
        <small>Provide a description of the creator. Who are they? What makes them interesting?</small>
        <input
          type="text"
          id="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </label>

      <h5 className="title">SOCIAL MEDIA LINKS</h5>
      <small className="social-description">Provide at least one of the creator's social media links.</small>

      <label htmlFor="youtube">
        <FaYoutube size={25} style={{ color: "white", marginRight: "1rem" }} />
        Youtube
        <small>The creator's YouTube handle (without the @)</small>
        <input
          type="text"
          value={youtubeHandle}
          onChange={e => setYoutube(e.target.value)}
        />
      </label>

      <label htmlFor="twitter">
        <FaTwitter size={25} style={{ color: "white", marginRight: "1rem" }} />
        Twitter
        <small>The creator's Twitter handle (without the @)</small>
        <input
          type="text"
          value={twitterHandle}
          onChange={e => setTwitter(e.target.value)}
        />
      </label>

      <label htmlFor="instagram">
        <FaInstagram size={25} style={{ color: "white", marginRight: "1rem" }} />
        Instagram
        <small>The creator's Instagram handle (without the @)</small>
        <input
          type="text"
          value={instagramHandle}
          onChange={e => setInstagram(e.target.value)}
        />
      </label>
    </form>
  )
}

export default CreatorInput;
