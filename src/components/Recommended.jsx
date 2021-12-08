import Man2 from '../img/pfp/man2.png'
import Woman2 from '../img/pfp/woman2.jpg'
import News from '../img/pfp/news.jpg'
import Woman3 from '../img/pfp/woman3.jpg'
import Man3 from '../img/pfp/man3.jpg'
import '../Recommended.css';

function Recommended() {
    return(
        <div className="recommended-component">
            <div className="rec-h1">You might like..</div>
            <div className="rec-item">
                <div className="rec-item-img">
                    <img src={Man2} alt="" />
                </div>
                <div className="rec-item-text">
                <h1>John Anderson</h1>
                <p>@johnandy</p>
                </div>
            </div>
            <div className="rec-item">
                <div className="rec-item-img">
                    <img src={Woman2} alt="" />
                </div>
                <div className="rec-item-text">
                <h1>Patrice Harewood</h1>
                <p>@patriceee</p>
                </div>
            </div>
            <div className="rec-item">
                <div className="rec-item-img">
                    <img src={News} alt="" />
                </div>
                <div className="rec-item-text">
                <h1>Channel 3 News</h1>
                <p>@channel3news</p>
                </div>
            </div>
            <div className="rec-item">
                <div className="rec-item-img">
                    <img src={Man3} alt="" />
                </div>
                <div className="rec-item-text">
                <h1>Jimmy Newton</h1>
                <p>@jimmyn</p>
                </div>
            </div>
            <div className="rec-item">
                <div className="rec-item-img">
                    <img src={Woman3} alt="" />
                </div>
                <div className="rec-item-text">
                <h1>Hannah Jones</h1>
                <p>@hannnah</p>
                </div>
            </div>
        </div>
    )
}

export default Recommended;