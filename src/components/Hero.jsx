import avatar from "../images/avatar.png";

function Hero() {
  return (
    <section className="Hero">
      <img src={avatar} alt="User avatar" />

      <h2>Laura Smith</h2>
      <h4>Frontend Developer</h4>
      <p>laurasmith.website</p>

      <div className="button-wrapper">
        <button className="btn btn-default">
          <i className="fas fa-envelope"></i>Email
        </button>
        <button className="btn btn-primary">
          <i className="fab fa-linkedin"></i>LinkedIn
        </button>
      </div>
    </section>
  );
}

export default Hero;
