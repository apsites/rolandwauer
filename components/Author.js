import "../styles/author.scss";

export default function Author() {
    return (
        <div id="author" className="author-container author-container--styles">
            <div className="author-center">
                <div className="author-img-container">
                    <img className="author-img" src="/rolanheadpic.jpg" alt="george orwell picture smoking cigarette" />
                </div>
            </div>
            <div className="summary-container">
                <p className="summary summary--styles">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum, justo non finibus luctus, lacus erat ultricies ante, sit amet faucibus sem diam sed felis. Pellentesque iaculis dignissim ante, a scelerisque arcu porta quis. Phasellus in elementum dui, non feugiat massa. Donec id felis vitae nisi sagittis accumsan eget quis tellus. Maecenas efficitur velit odio, ultrices ullamcorper lectus vestibulum vitae. Vestibulum pretium tristique rhoncus. Etiam auctor lectus non iaculis lacinia. Duis faucibus tortor nec augue viverra, et ultrices nunc viverra. Vivamus blandit eu tortor ut vulputate. Donec in ex rhoncus, commodo est quis, pharetra ex. Nunc feugiat suscipit purus sit amet sagittis.
                </p>
            </div>
        </div>
    )
}