import "../../assets/css/about/about.css";
import AboutCards from "../../components/AboutCards/AboutCards";

const About = () => {
  const card = [
    {
      id: 1,
      image: "/public/images/icon-online.svg",
      title: "Online Banking",
      texto:
        "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world",
    },
    {
      id: 2,
      image: "/public/images/icon-budgeting.svg",
      title: "Simple Budgeting",
      texto:
        "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
    },
    {
      id: 3,
      image: "/public/images/icon-onboarding.svg",
      title: "Fast Onboarding",
      texto:
        "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
    },
    {
      id: 4,
      image: "/public/images/icon-api.svg",
      title: "Open API",
      texto:
        "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    },
  ];
  return (
    <section className='about' id='about'>
      <div className='about__container'>
        <h2 className='about__container-title'>Why choose Easybank?</h2>
        <p className='abuut__container-text'>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <div className='about__cards'>
        {card.map((cards) => (
          <AboutCards key={cards.id} cards={cards} />
        ))}
      </div>
    </section>
  );
};

export default About;
