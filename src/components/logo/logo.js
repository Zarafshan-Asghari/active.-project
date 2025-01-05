import logoImg from "./Logo (2).png";
import { Link } from "react-router-dom";
function Logo() {
  return (
    <>
      <Link to="/" className="pb-1">
        <img className="w-24 " src={logoImg} alt="" />
      </Link>
    </>
  );
}
export default Logo;
