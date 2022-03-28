// == Import : npm
import * as React from 'react';
import * as PropTypes from 'prop-types';

// == Import : local
import './style.scss';

type HeaderProps = {
  name: IRecipe['title'],
  thumbnail: IRecipe['thumbnail'],
  author: IRecipe['author'],
  difficulty: IRecipe['difficulty']
};

// == Composant
const Header = ({
  name, thumbnail, author, difficulty,
}: HeaderProps) => (
  <header className="presentation">
    <img
      src={thumbnail}
      alt="Bonnes crêpes"
      className="presentation-image"
    />
    <div className="presentation-content">
      <h1 className="presentation-title">{name}</h1>
      <p className="presentation-infos">{author} - {difficulty}</p>
    </div>
  </header>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
};

// == Export
export default Header;
