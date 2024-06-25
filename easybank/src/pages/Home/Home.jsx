import "../../assets/css/root.css";
import "../../assets/css/home/home.css";
import "../../assets/css/button/button.css";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";

const Home = () => {
  const estadoMenu = (state) => {
    const home = document.getElementById("home");
    const mockup = document.getElementById("mockup");
    state
      ? (home.style.background =
          "linear-gradient(0deg,rgba(155, 155, 155, 0.3),rgba(45, 49, 77, 0.7))")
      : (home.style.background = "");

    mockup.style.display = state ? "none" : "block";
  };
  return (
    <section className='home' id='home'>
      <Header estadoMenu={estadoMenu} />
      <div className='home__container'>
        <div className='home__container-bgMockups'>
          <img
            src='public/images/bg-intro-mobile.svg'
            alt='bg-intro-mobile'
            className='home__container-bgMobile'
            loading='lazy'
          />
          <img
            src='public/images/bg-intro-desktop.svg'
            alt='bg-intro-desktop'
            className='home__container-bgDesktop'
            loading='lazy'
          />
          <img
            src='public/images/image-mockups.png'
            alt='bg-intro-mobile'
            className='home__container-bgMockup'
            id='mockup'
            loading='lazy'
          />
        </div>
        <div className='home__container-description'>
          <h2 className='home__container-description-title'>
            Next generation digital banking
          </h2>
          <p className='home__container-description-description'>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <Button texto='Request Invite' clase='margin' />
        </div>
      </div>
    </section>
  );
};

export default Home;
