import { useSelector } from "react-redux";
import { userType } from "../../types";

const Username = () => {
  const { username } = useSelector((state: userType) => state.user);

  if (!username) return null;

  return <p className="hidden text-sm font-semibold md:block">{username}</p>;
};

export default Username;
