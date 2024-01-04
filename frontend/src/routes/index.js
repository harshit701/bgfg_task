import RootLayout from "../pages/RootLayout";
import Error from "../pages/Error";
import NewsDetailPage, { newsDetailLoader } from "../pages/NewsDetailPage";
import NewsPage, { newsLoader } from "../pages/NewsPage";

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <NewsPage />,
        loader: newsLoader,
      },
      {
        path: "news/:newsId",
        element: <NewsDetailPage />,
        id: "news-detail",
        loader: newsDetailLoader,
      },
    ],
  },
];

export default routes;
