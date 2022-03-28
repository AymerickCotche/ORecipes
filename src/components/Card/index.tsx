import * as PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as React from 'react';

import './style.scss';

type CardProps = {
  thumbnail: IRecipe['thumbnail'],
  title: IRecipe['title'],
  difficulty: IRecipe['difficulty'],
  slug: IRecipe['slug']
};

const Card = ({
  thumbnail,
  title,
  difficulty,
  slug,
}: CardProps) => (
  <article className="card">
    <img className="card-img" src={thumbnail} alt={title} />
    <div className="card-content">
      <h2 className="card-title">{title}</h2>
      <p className="card-desc">Difficulté : {difficulty}</p>
      <Link to={`/recipe/${slug}`} className="card-link">Voir la recette</Link>
    </div>
  </article>
);

Card.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default Card;
