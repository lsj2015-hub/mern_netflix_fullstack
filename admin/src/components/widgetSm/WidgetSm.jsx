import './widgetSm.css';
import { Visibility } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get('/users?new=true', {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNWE0NWQ3MWI5OWZmNWE0ODgxODNlMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDE1OTYzNywiZXhwIjoxNjUwNTkxNjM3fQ.RyTs5qK3J_4rBu0Oviqq922MTInUk-a9BIIZ4EtYshE',
          },
        });
        // console.log(res.data);
        setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user) => (
          <li key={user._id} className="widgetSmListItem">
            <img
              src={
                user.profilePic ||
                'https://i.pinimg.com/736x/db/70/dc/db70dc468af8c93749d1f587d74dcb08.jpg'
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetsmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
