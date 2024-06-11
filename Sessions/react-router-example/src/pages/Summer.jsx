import Footer from "../conponents/Footer";
import Nav from "../conponents/Nav";
import Hero from "../conponents/Hero";

export default function Summer () {
    return (
        <div>
                <Nav />
                <Hero 
                title = "Welcome to Summer"
                photo = 'assets/images/summer.png' />
                <Footer />
        </div>
    )
}