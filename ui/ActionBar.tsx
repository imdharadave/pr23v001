import '@/styles/actionBar.css';

type Props = {};

const avatarData = [
  {
    name: 'Kathie Crol',
    dei: 'Developer',
    url: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template.jpg',
  },
];
const ActionBar = (props: Props) => {
  return (
    <div className="card__actions flex items-center justify-center">
      {avatarData.map((avatarData) => (
        <>
          <div className="card__avatar placeholder w-12">
            <img src={avatarData.url} alt={avatarData.name} />
          </div>
          <div className="card__demo ">
            <h3>{avatarData.name}</h3>
            <span className="text-xl">{avatarData.dei}</span>
          </div>
        </>
      ))}
    </div>
  );
};

export default ActionBar;
