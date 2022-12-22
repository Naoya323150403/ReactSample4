import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { serach } = useLocation();
  const query = new URLSearchParams(serach);
  return (
    <div>
      <h1>UrlParamete</h1>
      <p> パラメータは{id}です</p>
      <p> クエリパラメーターは　 {query.get("name")} desu</p>
    </div>
  );
};
