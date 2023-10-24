import { Star, Clock } from 'react-feather';

import '../styles/movie-card.scss';
import { memo } from 'react';

interface MovieCardProps {
  movie: {
    Title: string;
    Poster: string;
    Ratings: [{Value: string}]
    Runtime: string;

  }
}

export function MovieCardComponent({movie}: MovieCardProps) {
  return (
    <div className="movie-card">
      <img
        src={movie.Poster}
        alt={movie.Title}
      />

      <div>
        <div className="movie-info">
          <span>{movie.Title}</span>
          <div className="meta">
            <div>
              <Star /> {movie.Ratings[0].Value}
            </div>

            <div>
              <Clock /> {movie.Runtime}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const MovieCard: any = memo(MovieCardComponent, (prevProps, nextProps) => {
    //condição para satisfazer se vai ter informações iguais ou não
    return Object.is(prevProps.movie, nextProps.movie)
  })