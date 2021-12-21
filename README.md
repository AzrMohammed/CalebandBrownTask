# CalebandBrownTask

Task Video Link:
https://www.youtube.com/watch?v=dFNncwZ4v3M&t=7s

Functional Flow

1. App contains 4 tabs :
 
a. Home:
  Home gets the list of coins from coingecko api and lists
    i.  Each request get 30 items per page
  With sort option the user can able to sort with id, volume, market cap
  Upon internet failure user is provided with the retry option 
  Ability to bookmark 
  
b. Search
  Lists default 50 items 
  When user enters the search term the ids of the matching symbol/name is fetched locally from the all coins array (all coins array is fetched at the app launch), 
  then the request is made with the filtered ids
  Upon internet failure user is provided with the retry option 
  Ability to bookmark
  
c. Lists trending coins from coingecko api

d. Lists bookmarked items
    i.  Gets ids from the bookmarked coins
    ii. Fetch recent data from coingecko api using the ids



2. Data & Storage:

  App uses 2 reducers
  
  i.  AppReducer (persisted => contains default values, favorite ids, all coins) 
  ii. CoinReducer 



