import logo from "../assets/logo.png"

export default function Navbar () {
    return (
        <header>
            <div>
            <img src={logo}/>
            <h3>ReactFacts</h3>
            </div>
            <div>
            <h4>React course - project 1</h4>
            </div>
        </header>
    )
}