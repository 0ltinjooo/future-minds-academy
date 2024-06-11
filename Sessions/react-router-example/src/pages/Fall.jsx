import Footer from "../conponents/Footer";
import Nav from "../conponents/Nav";
import Hero from "../conponents/Hero";

export default function Fall () {
    return (
        <div>
                <Nav />
                <Hero 
                title = "Welcome to fall"
                photo = 'assets/images/fall.png' />
                <Footer />
        </div>
    )
}