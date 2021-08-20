
//This is good but this violates SRP.
//i.e this class will change when trackcalories logic changed and how we notify on calorie surplus

class CalorieTracker
{
    constructor( maxCalories )
    {
        this.maxCalories = maxCalories;
        this.currentCalories = 0;
    }
    
    trackCalories( calorieCount )
    {
        this.currentCalories += calorieCount;
        if( this.currentCalories > this.maxCalories )
        {
            this.logCalorieSurplus();
        }
    }

    logCalorieSurplus()
    {
        console.log('Max calories exceeded');
    }
}

const calorieTracker = new CalorieTracker( 2000 );
calorieTracker.trackCalories( 500 );
calorieTracker.trackCalories( 1000 );
calorieTracker.trackCalories( 600 ); //calorie surplus logged