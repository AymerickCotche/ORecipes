import * as PropTypes from 'prop-types';

import * as React from 'react';

import Card from 'src/components/Card';

import './style.scss';

interface ContentProps {
  title: string,
  text: string,
  recipes: RecipeState['list']
}

const Content = ({ title, text, recipes }: ContentProps) => (
  <section className="content">
    <h1 className="content-title">{title}</h1>
    <p className="content-text">{text}</p>
    {recipes && (
      <div className="content-list">
        {recipes.map((recipe) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Card key={recipe.id} {...recipe} />
        ))}
      </div>
    )}
  </section>
);

Content.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

Content.defaultProps = {
  recipes: null,
};

export default Content;
