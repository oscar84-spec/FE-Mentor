import styled from "styled-components";
import "../../assets/css/article/articleCard.css";

const ImageContainer = styled.div`
  background: url(${(props) => props.$image}) center/cover no-repeat;
  width: 100%;
  height: 200px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const ArticleCard = ({ article }) => {
  const { image, by, subtitle, texto } = article;
  return (
    <div className='container__article-card'>
      <ImageContainer $image={image} />
      <div className='container__article-info'>
        <span className='container__article-legend'>{by}</span>
        <h2 className='container__article-subtitle'>{subtitle}</h2>
        <p className='container__article-description'>{texto}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
