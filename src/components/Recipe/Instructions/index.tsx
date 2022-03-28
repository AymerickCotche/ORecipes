// Import NPM
import * as PropTypes from 'prop-types';

import * as React from 'react';

// Imports locaux
import './style.scss';

type InstructionsProps = {
  steps: IRecipe['instructions'],
};

const Instructions = ({ steps }: InstructionsProps) => (
  <ol className="steps">
    {steps.map((instruction) => (
      <li key={instruction} className="step">
        {instruction}
      </li>
    ))}
  </ol>
);

// on valide nos props
Instructions.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

// Export composant
export default Instructions;
