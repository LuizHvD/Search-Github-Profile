import './ProfileCard.css';

const ProfileCard = ({user}) => {
    return(
    <div className='card'>
         <img src={user.avatar_url} alt={user.name} className="avatar" />
        <div>
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      </div>
    </div>
  );
};

export default ProfileCard;