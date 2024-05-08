import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { LuTv } from "react-icons/lu";

export default function Header() {
    return (
        <>
            <Link to={"/Home"}>What to see?</Link>

            <Link to={"/ComparePage"}><LuTv />Hva skal jeg se?</Link>
            
            <Link to={"/GenresPage"}>Bla gjennom sjangere</Link>

            <Link to={"/"}><FaRegUserCircle />Bruker</Link>
        </>

    )
}