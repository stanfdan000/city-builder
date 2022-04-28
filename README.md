# City Builder

## Demo

[Link to Demo](https://alchemy-web-city-builder.netlify.app/)

## Getting Started

Use [this template](https://github.com/alchemycodelab/web-template) to get started.

### Learning Objectives

-   Use a for/of loop to run a function against every item in an array
-   In response to a user event, add a new item to a state array and display the new state to the user
-   Use the .value property to get the value of a 'grabbed' HTML form input tag
-   Use .createElement() and .append() to display a new HTML tag (with .textContent ) to a grabbed DOM element on click.
-   Create a select element to create a dropdown.
-   Use template literals to concatenate strings
-   Identify what variables are in a given scope/closure

### Description

For this deliverable you will be making an app that allows you to create your "perfect city". You will create a series of dropdowns that when changed, will update an image `src`. Your dropdowns can be anything you would like, but here are a list of suggestions:

-   Architecture (Modern, Gothic, Art Deco)
-   Climate (Desert, Tropical, Temperate)
-   Castles (3-4 different pictures of castles)
-   Coastline (Rocky, sandy, volcanic)
-   Known for (Good food, good music, beautiful parks)

Your app will track how many times a user has changed each dropdown and display it to the user.

You will also have an input that tracks suggestions for the City's slogan.

### Acceptance Criteria

-   Users can select three different "features" of a city, with at least three options for each feature
-   Users can see how many times each feature has been changed
-   Users can add slogans and see all previous slogans

### Rubric

| Task                                                                       | Points |
| -------------------------------------------------------------------------- | ------ |
| At least 3 dropdowns, with at least 3 options each.                        | 3      |
| On changing dropdowns, new images are displayed (1 point per dropdown)     | 3      |
| The number of times each dropdown has changed is displayed to the user     | 1      |
| An input with a button that allows the user to pick a slogan and displays to user               | 1      |
| **Functions**                                                              |        |
| Impure `displayStats()`                                                    | 1      |
| Impure `displaySlogans()`                                                  | 1      |
