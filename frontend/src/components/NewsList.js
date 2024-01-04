import { Link } from "react-router-dom";
import classes from "./NewList.module.css";

function NewsList({ news }) {
  return (
    <div className={classes.list}>
      <h1>All News</h1>
      <ul>
        {news.map((news) => (
          <li key={news.id}>
            <img src={news.image} alt={news.title} />
            <div className={classes.content}>
              <small>{news.date}</small>
              <h2>{news.title}</h2>
              <p>{news.summary}</p>
            </div>
            <Link to={"/news/" + news.id}>
              <button className={classes.btn}>Show Details</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsList;
