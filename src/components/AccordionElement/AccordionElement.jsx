import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal';
import Button from 'components/Button';
import Input from 'components/Input';
import { storage } from 'utils/storage';
import styles from './AccordionElement.module.css';

const AccordionElement = ({
  title,
  ingredients,
  index,
  refresh,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [recipeName, setRecipeName] = useState(title);
  const [recipeIngredients, setRecipeIngredients] = useState(ingredients.join(', '));

  const toggleIsExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleIsEditModalVisible = () => {
    setIsEditModalVisible(!isEditModalVisible);
  };

  const handleCancelEdit = () => {
    setIsEditModalVisible(false);
    setRecipeName(title);
    setRecipeIngredients(ingredients.join(', '));
  };

  const handleRecipeNameChange = (e) => {
    setRecipeName(e.target.value);
  };

  const handleRecipeIngredientsChange = (e) => {
    setRecipeIngredients(e.target.value);
  };

  const handleDelete = () => {
    toggleIsExpanded();
    storage.remove(index);
    refresh();
  };

  const handleEdit = () => {
    storage.edit(index, recipeName, recipeIngredients.split(',').map((x) => x.trim()).filter((x) => x));
    toggleIsEditModalVisible();
    refresh();
  };

  return (
    <div>
      <button
        type="button"
        onClick={toggleIsExpanded}
        className={styles.headerButton}
      >
        {title}
      </button>
      {isExpanded && (
        <div className={styles.content}>
          <ul className={styles.list}>
            {ingredients.map((x, i) => (<li key={`${x}-${i}`}>{x}</li>))}
          </ul>
          <div className={styles.buttonsWrapper}>
            <Button onClick={toggleIsEditModalVisible}>Edit</Button>
            <Button danger onClick={handleDelete}>Delete</Button>
          </div>
        </div>
      )}
      <Modal
        isVisible={isEditModalVisible}
        title="Edit recipe"
        content={(
          <div>
            <Input
              label="Recipe"
              value={recipeName}
              onChange={handleRecipeNameChange}
            />
            <Input
              textarea
              label="Ingredients"
              value={recipeIngredients}
              onChange={handleRecipeIngredientsChange}
            />
          </div>
        )}
        okText="Save"
        okAction={handleEdit}
        cancelText="Cancel"
        cancelAction={handleCancelEdit}
      />
    </div>
  );
};

AccordionElement.propTypes = {
  title: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
  refresh: PropTypes.func.isRequired,
};

export default AccordionElement;
