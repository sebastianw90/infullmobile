import React from 'react';
import PropTypes from 'prop-types';
import AccordionElement from 'components/AccordionElement';
import styles from './RecipesList.module.css';

const RecipesList = ({ storageData, refresh }) => (
  <div className={styles.container}>
    {
      (storageData && storageData.length > 0) ? (
        Object.entries(storageData).map(([index, [title, ingredients]]) => (
          <AccordionElement
            key={index}
            title={title}
            ingredients={ingredients}
            index={index}
            refresh={refresh}
          />
        ))
      ) : (
        'No recipes yet'
      )
    }
  </div>
);

RecipesList.propTypes = {
  storageData: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  refresh: PropTypes.func.isRequired,
};

export default RecipesList;
