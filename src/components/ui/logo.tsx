import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <img src="/nasa-logo.svg" alt="Nasa Logo" className="w-[50px]" />
    </Link>
  );
}
