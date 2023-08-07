import { useEffect } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom/';

export const Abc = () => {
  const { slug, id } = useParams();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    setTimeout(function () {
      history.push('/');
    }, 1000);
  }, [history]);

  console.log(location, history);

  return (
    <div>
      <h1>
        ABC
        {slug}
        {id}
        {/* {location} */}
        {/* {history} */}
      </h1>
    </div>
  );
};
