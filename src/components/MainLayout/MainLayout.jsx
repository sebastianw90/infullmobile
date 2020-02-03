import React, { Fragment, useState } from 'react';
import Button from 'components/Button';
import RecipesList from 'components/RecipesList';
import Modal from 'components/Modal';
import Input from 'components/Input';
import { storage } from 'utils/storage';
import styles from './MainLayout.module.css';

const MainLayout = () => {
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [recipeName, setRecipeName] = useState('');
  const [recipeIngredients, setRecipeIngredients] = useState('');
  const [refresh, setRefresh] = useState(false);

  const toggleIsModalVisible = () => {
    setIsAddModalVisible(!isAddModalVisible);
  };

  const handleRecipeNameChange = (e) => {
    setRecipeName(e.target.value);
  };

  const handleRecipeIngredientsChange = (e) => {
    setRecipeIngredients(e.target.value);
  };

  const handleAddRecipe = () => {
    if (!recipeName || !recipeIngredients) {
      // eslint-disable-next-line no-undef
      window.alert('Please fill all the input fields');
      return;
    }
    storage.set(recipeName, recipeIngredients.split(',').map((x) => x.trim()).filter((x) => x));
    setIsAddModalVisible(false);
    setRecipeName('');
    setRecipeIngredients('');
  };

  const refreshLayout = () => {
    setRefresh(!refresh);
  };

  const storageData = storage.getAll();

  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>Recipes</h1>
          <div className={styles.listWrapper}>
            <RecipesList storageData={storageData} refresh={refreshLayout} />
          </div>
          <div className={styles.btnBar}>
            <Button onClick={toggleIsModalVisible} primary>Add recipe</Button>
          </div>
        </div>
      </div>
      <Modal
        isVisible={isAddModalVisible}
        title="Add recipe"
        content={(
          <div>
            <Input
              label="Recipe"
              value={recipeName}
              onChange={handleRecipeNameChange}
              placeholder="Name of your recipe"
            />
            <Input
              textarea
              label="Ingredients"
              value={recipeIngredients}
              onChange={handleRecipeIngredientsChange}
              placeholder="Comma separated list of ingredients"
            />
          </div>
        )}
        okText="Add recipe"
        okAction={handleAddRecipe}
        cancelText="Cancel"
        cancelAction={toggleIsModalVisible}
      />
    </Fragment>
  );
};

export default MainLayout;
