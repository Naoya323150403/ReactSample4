import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

export const Page1DetaiA = () => {
  const location = useLocation();
  console.log(location);
  const history = useHistory();

  const onClickBack = () => history.goBack();

  return (
    <div>
      <h1>Page1Detailページです</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
