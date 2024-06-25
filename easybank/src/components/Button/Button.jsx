import "../../assets/css/button/button.css";

const Button = ({ clase, texto }) => {
  return (
    <button type='button' className={`btn ${clase}`}>
      {texto}
    </button>
  );
};

export default Button;
