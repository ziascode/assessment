# Plank coding assessment - Zia Yousaf

A react application that filters case studies based on category.

### Live Preview

You can view the live app [here](https://frosty-yalow-4da450.netlify.app/) 



## Technologies Used

* React.js 
* Tailwind.js for styling 
* Framer Motion for animations
* Netlify for live preveiw 

## Roadmap

1. Set up react-app and install required framework and libraries (Tailwind, Axios, and Framer Motion)

2. Use Axios to request data from the 2 endpoints below and store the data using states: 

3.  Style the app with Tailwind. Ensure the following: 
* App is fully responsive and prioritizes mobile display 
* Information is easily accessible to users and matches the provided design.
* Max content width is 1280 px

4.  Add Filter functionality

5.  Add animations
* Animate filter functionality using framer motion



## My Approach

My first step was to assess the scope of the project and decide on the most appropriate tools for the job.
Since this wasn’t a complex app with too many components and moving parts, I decided to use Tailwind for the styling as it is lightweight and quick to write making it ideal for a project of this scope. For similar reasons I used Framer Motion for animations.  

I started the project by importing all the required data from the 2 provided endpoints using Axios. I then stored this data in states. 
UseEffect was used to initiate this function whenever the app loads.

Since there weren't too many states to manage, I decided to keep the states in the main App.js instead of using a state management method.


Next I divided the react app into 2 components based on mockups: 
* A navigation component: this component contains the filter tabs
* A main body / cards component: this contains and renders all the case studies

I then passed the data values from the Categories endpoint into the Navigation component and data values from the Case Studies endpoint into the main body component as props.

Each component rendered Navigation Tabs and Case Studies respectively, using the map method.

At this point the application had all the data it needed and in the right components. 


### Styling
The app was styled using Tailwind.js.

### Filter Function
I set up a function (selectCategory) that checked if the rendered case studies matched the category selected by the user, and if true, adds the case study to a seperate state used for storing filtered case studies. UseEffect was used to run this check every time there was a change in the case studies stored in this new state. The filtered case studies are then rendered in the UI.  

### Animations
I used the layout property from Framer motion to animate the layout changes that occur when a category is selected.

### Accessibility 
I added hover animations that highlights a case study when a user hovers over it. This helps create a seperation between the case study of interest and the rest of the case studies improving the user experience. 
Hover animation was also used to enlarge the "VIEW CASE STUDY" when users hover over it.  

### Error handling 
Two case studies from the given enpoints were missing a property each which meant that property would not be rendered according to the given designs. I fixed this by using a ternary operator to check if the data was missing from the case study being rendered and if true, to fill in the missing data with custom data. 

