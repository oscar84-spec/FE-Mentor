import "../../assets/css/article/article.css";
import ArticleCard from "../../components/ArticleCard/ArticleCard";

const Articles = () => {
  const articles = [
    {
      id: 1,
      image: "/public/images/image-currency.jpg",
      by: "By Claire Robinson",
      subtitle: "Receive money in any currency with no fees",
      texto:
        "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
    },
    {
      id: 2,
      image: "/public/images/image-restaurant.jpg",
      by: "By Wilson Hutton",
      subtitle: "Treat yourself without worrying about money",
      texto:
        "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
    },
    {
      id: 3,
      by: "By Wilson Hutton",
      image: "/public/images/image-plane.jpg",
      subtitle: "Take your Easybank card wherever you go",
      texto:
        "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
    },
    {
      id: 4,
      by: "By Claire Robinson",
      image: "/public/images/image-confetti.jpg",
      subtitle: "Our invite-only Beta accounts are now live!",
      texto:
        "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
    },
  ];
  return (
    <section className='article' id='article'>
      <h2 className='article__title'>Latest Articles</h2>
      <div className='article__container-article'>
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
};

export default Articles;
