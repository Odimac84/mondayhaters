import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-primary-bg flex justify-between w-full h-[80px] rounded-b-lg py-2">
      <div className="flex flex-wrap content-center ps-5" id="logo">
        <img src="./svg/wow.svg" alt="logo" />
        <h1 className="text-gold font-heading text-3xl ps-3 pt-4">The Monday Haters</h1> {/* This should be a link later on */}
      </div>
      <nav>
        <ul className="flex gap-7 pe-2 content-center flex-wrap h-full">
          <li>
            <Link className="flex gap-2" to="profile"><img src="./svg/profile.svg" alt="profile icon"/>Profile</Link>
          </li>
          <li>
          <Link className="flex gap-2" to="http://localhost:9000/auth">Login</Link> {/* Should it be link even if it is an external source? */}
          </li>
          <li>
            <Link className="flex gap-2" to="reservation"><img src="./svg/reservation.svg" alt="reservation icon"/>Reservation</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
};

export default Navbar;