// == Import : npm
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { useAppDispatch } from 'src/hooks/typedHooks';
import { changeField } from 'src/actions/user';

// == Import : local
import './style.scss';

type FieldProps = {
  value: string,
  type: string,
  name: string,
  placeholder: string,
};

// == Composant
const Field = ({
  value,
  type,
  name,
  placeholder,
}: FieldProps) => {
  const dispatch = useAppDispatch();
  const handleChange = (evt: React.FormEvent<HTMLInputElement>) => {
    if (name === 'email' || name === 'password') {
      dispatch(changeField({ [name]: evt.currentTarget.value }));
    }
  };

  const inputId = `field-${name}`;

  return (
    <div className={value.length > 0 ? 'field field--has-content' : 'field'}>
      <input
        // React - state
        value={value}
        onChange={handleChange}
        // infos de base
        id={inputId}
        type={type}
        className="field-input"
        placeholder={placeholder}
        name={name}
      />

      <label
        htmlFor={inputId}
        className="field-label"
      >
        {placeholder}
      </label>
    </div>
  );
};

Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

// Valeurs par défaut pour les props
Field.defaultProps = {
  value: '',
  type: 'text',
};

// == Export
export default Field;
