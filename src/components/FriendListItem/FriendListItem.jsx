import PropTypes from 'prop-types';
import css from 'components/FriendList/FriendList.module.css';
export const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return (
        <li key={id} className={css.friend_item}>
            <span className={isOnline ? css.online : css.ofline}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    );
}


FriendListItem.propTypes = {
    id: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string,
};