import React, { forwardRef } from "react";
import "./videocard.css";
import TextTruncate from "react-text-truncate";
import { ThumbUpSharp } from "@material-ui/icons";
const baseUrl = "https://image.tmdb.org/t/p/original/";

const VideoCard = forwardRef(({ movie }, ref) => {
  return (
    <div ref={ref} className="videoCard">
      <img
        src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
        alt="image "
      />
      <TextTruncate
        line={2}
        element="p"
        truncateText="..."
        text={movie.overview}
      />
      <h2 className="videoCard__title">
        {movie.title || movie.original_title}
      </h2>
      <p className="videoCard__stats">
        {movie.release_date}
        <p className="videoCard__like">
          <ThumbUpSharp />
        </p>
        {movie?.vote_count || movie?.vote_average}
      </p>
    </div>
  );
});

export default VideoCard;
