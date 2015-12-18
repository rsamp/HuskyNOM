# Notes:

UW Color Scheme:

Purple: #4b2e83
Gold: #e8e3d3
Metallic Gold: #85754d
Dark Gray: #444444
Light Gray: #d9d9d9

Wireframe: #8856a1

## Come back to
I allowed Address to accept null in database. Look into using Google Maps Reverse Geocoding to get address from Lat/Lng

After adding Image model, revisit BusinessIndexItem and Business Page. Will also need default "no-image" image

removed return statement from store onDispatch

don't forget jbuilder if getting ajax errors

just have map and search on homepage. this would take away the bestOf and the recentActivity. changed Index.jsx

maybe don't allow businesses to be submitted. make sure to remove route and controller function

benchbnb search.jsx - contextTypes

refactoring opportunities: reviewIndex - instead of the if statement in render, perform a filter in the model

do review creation through controller with access to current user

average the ratings

search.jsx setinterval
Map Loading... -> No results Search.jsx: Use the store to know when results are finished being filtered. Similar issue with if no reviews yet for a business

use LinkState instead of individual handlers onChange - Form.jsx

revisit printing of Date. can I use new Date(pass any format here)?

revisit how to auto populate fields with demo account info
