import "./playlist-details.css";
import { PlayListBox, PlaylistVideos } from "../../allPagesPaths";
import { useTitle } from "../../components/helpers/useTitle";

/*=========================================*/
/*=========================================*/
/*=========================================*/

const PlaylistDetails = () => {

    // get the page title
    useTitle(`Playlist`);

    /*=========================================*/

    return (
        <div className='playlist-details custom-div'>
            <div className="container p-0">
                <PlayListBox />
                <PlaylistVideos />
            </div>
        </div>
    )
}

export default PlaylistDetails;