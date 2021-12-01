import classes from './AvailableMeals.module.css';
import Card from '../Ui/Card';
import MealItem from './MealItem/MealItem';


const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and vegies',
        price:22.99,
    },
    {
        id: 'm2',
        name: 'Mounika',
        description: 'vegies',
        price:33.99,
    },
    {
        id: 'm3',
        name: 'sakshitha',
        description: 'chicken',
        price:44.99,
    },
    {
        id: 'm4',
        name: 'Siri',
        description: 'vegetables',
        price:55.99,
    },
];


const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
      <MealItem 
      key={meal.id} 
      id={meal.id}
      name={meal.name} 
      description={meal.description}
      price={meal.price}
      />
    ));
    
     
    return (
        <section className={classes.meals}>
            <Card>
            <ul>
                {mealsList}
            </ul>
            </Card>
        </section>
    )
};

export default AvailableMeals;