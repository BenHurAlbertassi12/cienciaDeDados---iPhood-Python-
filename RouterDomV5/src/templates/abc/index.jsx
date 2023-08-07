// import { useEffect } from 'react';
import { useParams } from 'react-router-dom/';

export const Abc = () => {
  const { slug, id } = useParams();

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
