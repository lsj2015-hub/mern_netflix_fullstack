import './watch.scss';
import { ArrowBackOutlined } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

function Watch() {
  const location = useLocation();
  console.log('location: ', location);
  const movie = location.state.movie;
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video
        className="video"
        autoPlay
        progress="true"
        controls
        src={movie.video}
      />
    </div>
  );
}

export default Watch;
