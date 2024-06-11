import Footer from "../conponents/Footer";
import Nav from "../conponents/Nav";
import Hero from "../conponents/Hero";

export default function Spring () {
    return (
        <div>
                <Nav />
                <Hero 
                title = "Welcome to Spring"
                photo = 'assets/images/spring.png' />
                <Footer />
        </div>
    )
}