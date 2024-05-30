# Feed Me
Welcome to Feed Me, your solution for personalized meal planning! This website generates meal plans tailored to your macronutrient needs for each meal, ensuring you get the right balance of nutrients throughout the day.

## User Story
### Basic Information:
* Name: James
* Age: 35
* As a: Health-conscious gym-lover busy working professional with type 1 Diabetes 
I want to: Generate customized meal plans based on my specific nutritional needs 
So that: I can maintain a balanced diet that aligns with my health goals

## Getting Started
* Step 1: Select a date that you would like to create a meal plan for
* Step 2: Select the range of each macronutrient you would like to have for each meal
* Step 3: Click "Feed Me!"
* Step 4: For each meal, click on a meal option that you would like to add to your meal plan. You may click on the refresh button to show more options for each meal.
* Step 5: Click "Save Meal Plan" (Remember to select an option for each meal!)
* Step 6: Go to "My Saved Meal Plans" to view the meal plans that you have saved. You may edit and delete each meal plan by clicking on the corresponding buttons.

## Technologies Used
* Frontend framework
  * React
* Routing system
  * React Router Dom
* State management
  * useState, useEffect hooks
* Third party API's
  * [Spoonacular](https://spoonacular.com/food-api/) 
  * [Airtable](https://support.airtable.com/docs/)
* UI Library
  * [Chakra UI](https://chakra-ui.com/)
  * [React Daypicker](https://react-day-picker.js.org/)
* Form validation
  * [React hook form](https://www.react-hook-form.com/)

## Next Steps
* To allow more customisations to different dietary requirements (e.g. vegetarian)
* When user selects "edit" on meal plan, to redirect user to the search form with pre-populated date and criteria that were used to create that meal plan
* On the "My Saved Meal Plans" page, to render a calendar with dates that have a meal plan saved to be coloured in a different colour. Users can then select on those dates to see the meal plan that was saved for that day.

* ## Key Challenges & Learnings
### "Too many fetch requests" error 
* Saved more data to airtable so that they can easily be fetched
* Added an `onClick` function to each image so that fetch request is only raised when the user clicks on the image
### Adding meal options and rendering the outline to show that it has been selected
* Used `console.log() ` to make sure that selected meal items were correctly added to the meal plan
### Learning to use libraries
* Namely Chakra UI and Daypicker - had to read how each component worked and customisations available 
  
