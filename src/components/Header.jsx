import { Link } from "react-router-dom";

export default function Header() {
    return (
        <Header>
            <Link to={"/"}>What to see?</Link>

            <Link to={"/ComparePage"}>Hva skal jeg se?</Link>

            <Link to={"/GenresPage"}>Bla gjennom sjangere</Link>
        </Header>
    )
}