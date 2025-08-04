type Props = {
  username: string;
  age: number;
};

const UserCard = ({ username, age }: Props) => {
  return (
    <article className="flex">
      <h2>{username}</h2>
      <p>Age: {age}</p>
    </article>
  );
};

export default UserCard;
