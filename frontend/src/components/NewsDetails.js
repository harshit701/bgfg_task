import { Link } from "react-router-dom";
import classes from "./NewsDetails.module.css";

function NewsDetails({ news }) {
  return (
    <article className={classes.article}>
      <img src={news.image} alt={news.title} />
      <small>{news.date}</small>
      <h1>{news.title}</h1>
      <p>{news.summary}</p>
      <p>{news.content}</p>

      <Link to="/">
        <button>Back</button>
      </Link>
    </article>
  );
}

export default NewsDetails;
