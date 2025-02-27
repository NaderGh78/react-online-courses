import CustomHeading from "../helpers/CustomHeading";
import VideoCard from "./VideoCard";
import { videoCardData } from "../helpers/sectionData";

/*=========================================*/
/*=========================================*/
/*=========================================*/

const PlaylistVideos = () => {
  return (
    <>
      <CustomHeading text="playlist videos" />
      <div className="playlist-videos">
        <div className="container p-0">
          <div className="row">
            {
              videoCardData?.map(v => (
                <div className="col-xxl-4 col-lg-4 col-md-6" key={v.id}>
                  <VideoCard data={v} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default PlaylistVideos;