import Footer from "../conponents/Footer";
import Nav from "../conponents/Nav";
import Hero from "../conponents/Hero";

export default function Winetr () {
    return (
        <div>
                <Nav />
                <Hero 
                title = "Welcome to Winter"
                photo = 'assets/images/winter.png' />
                <Footer />
        </div>
    )
}