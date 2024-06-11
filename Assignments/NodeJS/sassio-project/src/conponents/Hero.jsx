export default function Hero() {
    return (
        <div>
            <div class="hero row">
                <div class="col text-left p-5 m-5 intro">
                    <button class="btn-primary speciale">On sale for a limited time</button>
                    <h1 class="display-1">Premium Startup & App</h1>
                    <h1 class="display-2"> Landing Page</h1>
                    <p class="hero-paragraf">Besides its beautiful design. Sassio is an incredibly rich core<br /> framework for
                        you to showcase your
                        App.
                    </p>
                     <div class="col img-fixed">
                        <img src="images/app_btn.png" alt="apple" />
                    </div> 
                    <div class="buttons">
                        <div class="button-container">
                            <img class="button-image" src="../assets/images/icone_apple.png" alt="Apple Image" />
                            <span class="seperator"></span>
                            <div class="button-text">
                                <span class="button-download">Download on the</span>
                                <span class="bold-text">Apple Store</span>
                            </div>
                        </div>
                        <div class="button-container">
                            <img class="button-image" src="assets/images/icone_apple.png" alt="Apple Image" />
                            <span class="seperator"></span>
                            <div class="button-text">
                                <span class="button-download">Get it on</span>
                                <span class="bold-text">Google Play</span>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="assets/images/bg.png" alt="Background Image" class="bg-img" />
                <div class="col pictures">
                    <img src="assets/images/phones.png" alt="Phones Image" class="img-fluid" />
                    <img src="assets/images/pattern-bg.png" alt="pattern" class="pattern-img" />
                </div>
            </div>
        </div>
    )
};