import { useRouteLoaderData } from "react-router-dom";
import NewsDetails from "../components/NewsDetails";

const NewsDetailPage = () => {
  const data = useRouteLoaderData("news-detail");

  return <NewsDetails news={data} />;
};

export default NewsDetailPage;

export const newsDetailLoader = async ({ request, params }) => {
  const response = await fetch("http://localhost:4000/news/" + params.newsId);

  if (!response.ok) {
    throw new Error({
      message: "An Error occurred while fetching news details!",
    });
  } else {
    return response;
  }
};
