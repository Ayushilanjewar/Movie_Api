import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Movies = () =>
{
  const [movies, setMovies] = useState([])
  const navigate= useNavigate()
  useEffect(() =>
  {
    axios.get("/api.json")
    .then((res)=>setMovies(res.data)).then(console.log("Hello"));
  }, [])
  return (
		<div>
			{movies ? (
				<div className='movies row'>
					{movies.map((movie) => (
						<div className='movie card col-3'>
							{/* <img
								src={movie.name}
								alt={movie.title}
								className=' card-img card-img-top'
							/> */}
							<h2 className=' card-title'>{movie.name}</h2>
							<button
								onClick={() => navigate(`/movie/${movie.Place}`)}
								className=' card-footer'>
								See more
							</button>
						</div>
					))}
				</div>
			) : (
				<p>There are no movies</p>
			)}
		</div>
	)
}

export default Movies