# PokeAPI

PokeAPI is a project that lists all the Pokemon of the first generation and their details

# Deployed solution

The link to access the project: https://pokeapiforfun.herokuapp.com/

# General requirements

General requirements:\
● As a starting point for your code please use the Create React App tool, not other solutions like Next.js or Gatsby\
● Data should be fetched from the Poke API\
● Usage of flexbox\
● Usage of React hooks along with function components instead of class based components\
● Usage of React Router\
● Both pages should have a fixed background image\
● The pokemon list should contain a search input that filters the list based on the name of the pokemons\
● Each pokemon in the list should be a card that contains the\
name and the image (default front sprite)\
● There should be 4 cards per row and the distance between them should be of 20 pixels\
● Clicking on a pokemon card will navigate to a detail page\
● The detail page should display the description, all images (sprites), the type/types (water for example) and the stats of the pokemon (special attack for example)\
● The type/types of the pokemon should be displayed as a rounded badge (should look like this but without using a UI library like Bootstrap)\
● The stats of the pokemon should be displayed as an unordered list\

# Notes:

● When fetching each Pokemon description, one Pokemon is set to throw an error for testing purposes. Pokemon's name: "slowbro"\
● The card/profile picture is set to be pokemonResponse -> sprites -> other -> official-artwork -> front_default for a better visual effect\
● The description from detail page is made from the characteristics' descriptions of a Pokemon. First all the stats of a Pokemon had to be fetched in order to get the characteristics urls.\

## Author

Ioana Catalina Echim
