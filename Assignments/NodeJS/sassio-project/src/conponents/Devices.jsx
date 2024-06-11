export default function Devices() {
    return (
        <div>
            <div className="row m-5  row-phone row-tablet">
                <div className="arrows">
                    <span className="material-symbols-outlined arrow west">west</span>
                    <span className="material-symbols-outlined arrow east">east</span>
                </div>
            </div>
            <div className="row metrics">
                <div className="col components">
                    <h1>773</h1>
                    <p>Components</p>
                </div>
                <div className="col downloads">
                    <h1>1254</h1>
                    <p>Downloads</p>
                </div>
                <div className="col followers">
                    <h1>14941</h1>
                    <p>Followers</p>
                </div>
                <div className="col users">
                    <h1>1254</h1>
                    <p>New User</p>
                </div>
            </div>
            <div className="row p-2">
                <div className="app-screnshot m-5 p-8">
                    <div className="col text-center">
                        <button className="speciale-1 appsc">EXPLORE NEW PLACES</button><br />
                        <h1 className="display-3">App ScreenShot</h1>
                        <br />
                    </div>
                    <div className="col-1 apps">
                        <img src="assets/images/market.png" alt="" className="screen market" />
                        <img src="assets/images/protofolio.png" alt="" className="screen pro" />
                        <img src="assets/images/trading.png" alt="" className="screen trading" />
                    </div>
                    <div className="bullet-container">
                        <div className="bullet"></div>
                        <div className="bullet"></div>
                        <div className="bullet"></div>
                        <div className="bullet"></div>
                        <div className="bullet"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}