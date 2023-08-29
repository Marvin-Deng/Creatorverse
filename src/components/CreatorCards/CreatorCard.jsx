import "./CreatorCard.css";
import { Link } from "react-router-dom";
import { FaYoutube, FaTwitter, FaInstagram, FaInfoCircle, FaPen } from "react-icons/fa";

const CreatorCard = (props) => {
  const youtubeIcon = props.youtubeHandle ? (
    <a href={"https://youtube.com/@" + props.youtubeHandle}>
      <FaYoutube size={30} style={{ color: "white", marginRight: "1rem" }} />
    </a>
  ) : null;

  const twitterIcon = props.twitterHandle ? (
    <a href={"https://twitter.com/@" + props.twitterHandle}>
      <FaTwitter size={30} style={{ color: "white", marginRight: "1rem" }} />
    </a>
  ) : null;

  const instagramIcon = props.instagramHandle ? (
    <a href={"https://instagram.com/" + props.instagramHandle}>
      <FaInstagram size={30} style={{ color: "white", marginRight: "1rem" }} />
    </a>
  ) : null;

  const MAX_DESCRIPTION_LENGTH = 420;

  return (
    <div className="card" style={{ backgroundImage: `url(${props.imageURL})` }}>
      <div className="left-column">
        <h3 class="name">{props.name}</h3>
        <div className="social-icons">
          {youtubeIcon}
          {twitterIcon}
          {instagramIcon}
        </div>
        <p>
          {props.description.length > MAX_DESCRIPTION_LENGTH 
            ? props.description.slice(0, MAX_DESCRIPTION_LENGTH) + "..." 
            : props.description}
        </p>
      </div>
      <div className="right-buttons">
        <Link
          to={
            `/creatorInfo?name=${props.name}&imageURL=${props.imageURL}&description=${props.description}&youtubeHandle=${props.youtubeHandle}&twitterHandle=${props.twitterHandle}&instagramHandle=${props.instagramHandle}&id=${props.id}`
          }
        >
          <FaInfoCircle
            size={23}
            style={{ color: "white", marginRight: "1rem" }}
          />
        </Link>

        <Link to={
          `/editCreator?name=${props.name}&imageURL=${props.imageURL}&description=${props.description}&youtubeHandle=${props.youtubeHandle}&twitterHandle=${props.twitterHandle}&instagramHandle=${props.instagramHandle}&id=${props.id}`
        }
        >
          <FaPen class="icon"
            size={23}
            style={{ color: "white", marginRight: "1rem" }}
          />
        </Link>

      </div>

    </div>
  );
}

export default CreatorCard