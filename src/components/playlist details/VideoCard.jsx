import { Link } from "react-router-dom";
import { LiaPlaySolid } from "react-icons/lia";

/*=========================================*/
/*=========================================*/
/*=========================================*/

const VideoCard = ({ data: { id, img } }) => {
    return (
        <Link to={"/watch-video"}>
            <div className="video-card">
                <div className="thumb">
                    <img src={
                        process.env.PUBLIC_URL + img}
                        className='img-fluid'
                        alt="video thumb" />
                    <div className="overlay-thumb">
                        <LiaPlaySolid />
                    </div>
                </div>
                <h6 style={{ fontSize: "1.8rem" }}>complete HTML tutorial (part {`0${id}`})</h6>
            </div>
        </Link>
    )
}

export default VideoCard;