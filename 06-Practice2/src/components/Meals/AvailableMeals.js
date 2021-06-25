import DUMMY_MEALS from "./dummy-meals";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import styles from "./AvailableMeals.module.css";

const AvailableMeals = (props) => {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return <MealItem key={meal.id} id={meal.id} meal={meal} />;
  });

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
