import {useParams} from 'react-router-dom'

export const Post = () => {
  const params = useParams();
  const {id} = params
  

  return (
    <div>
      <h1>
        post {id}
      </h1>
    </div>
  )
}