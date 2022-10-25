import PropTypes from 'prop-types';
import './Profile.css';

export const Profile = ({ avatar, username, tag, location, stats, followers, views, likes }) => {
    return (
        <div className="profile">
            <div className="description">
                <img src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
                    alt="User avatar" className="avatar" />
                <p className="name">{username}</p>
                <p className="tag">@{tag}</p>
                <p className="location">{location}</p>
            </div>

            <ul className="stats">
                <li className='stats-item'>
                    <span className="label">Followers</span>
                    <span className="quantity">{stats.followers}</span>
                </li>
                <li className='stats-item'>
                    <span className="label">Views</span>
                    <span className="quantity">{stats.views}</span>
                </li>
                <li className='stats-item'>
                    <span className="label">Likes</span>
                    <span className="quantity">{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
}

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
};