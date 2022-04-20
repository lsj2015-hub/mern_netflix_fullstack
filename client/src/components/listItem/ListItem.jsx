import './listItem.scss';
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownAltOutlined,
} from '@mui/icons-material';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get('/movies/find/' + item, {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNWE0NWQ3MWI5OWZmNWE0ODgxODNlMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDE1OTYzNywiZXhwIjoxNjUwNTkxNjM3fQ.RyTs5qK3J_4rBu0Oviqq922MTInUk-a9BIIZ4EtYshE',
          },
        });
        // console.log('res: ', res);
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  return (
    // Link 에 data를 주입할 때는 to={'/ccc'} state={{ xxx: yyyy}} 형태로
    <Link to={'/watch'} state={{ movie }}>
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie.img} alt="" />
        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownAltOutlined className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className="limit">+{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">{movie.desc}</div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}

export default ListItem;
