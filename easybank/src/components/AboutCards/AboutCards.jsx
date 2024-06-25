import styled from "styled-components";
import "../../assets/css/about/aboutCard.css";

const BgImage = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: url(${(props) => props.$image});
`;

const AboutCards = ({ cards }) => {
  const { image, texto, title } = cards;
  return (
    <div className='container__card'>
      <BgImage $image={image} />
      <h2 className='container__card-title'>{title}</h2>
      <p className='container__card-description'>{texto}</p>
    </div>
  );
};

export default AboutCards;
