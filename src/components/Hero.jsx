import avatar from "../images/avatar.png";

function Hero() {
  return (
    <section className="Hero">
      <img src={avatar} alt="User avatar" />

      <h2>Laura Smith</h2>
      <h4>Frontend Developer</h4>
      <p>laurasmith.website</p>

      <div>
        <button>
          <i class="fas fa-envelope"></i>Email
        </button>
        <button>
          <i class="fab fa-linkedin"></i>LinkedIn
        </button>
      </div>
    </section>
  );
}

export default Hero;
