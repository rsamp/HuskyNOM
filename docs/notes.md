# Notes:

UW Color Scheme:

Purple: #4b2e83
Gold: #e8e3d3
Metallic Gold: #85754d
Dark Gray: #444444
Light Gray: #d9d9d9

Wireframe purple: #8856a1

## Come back to
I allowed Address to accept null in database. Look into using Google Maps Reverse Geocoding to get address from Lat/Lng

After adding Image model, revisit BusinessIndexItem and Business Page. Will also need default "no-image" image

don't forget jbuilder if getting ajax errors

just have map and search on homepage. this would take away the bestOf and the recentActivity. changed Index.jsx

maybe don't allow businesses to be submitted. make sure to remove route and controller function

benchbnb search.jsx - contextTypes

refactoring opportunities: reviewIndex - instead of the if statement in render, perform a filter in the model

do review creation through controller with access to current user

search.jsx setinterval
Map Loading... -> No results Search.jsx: Use the store to know when results are finished being filtered. Similar issue with if no reviews yet for a business

look up LinkState instead of individual handlers onChange - Form.jsx

revisit printing of Date. can I use new Date(pass any format here)?

edit stars to be purple

show stars in review index item
set minimum rating. use flash errors? could be annoying with react.
form component did mount weird star thing after refresh

remove "non-react" message from root

how to defend against entering something in address bar manually. breaks functionality of site

revisit business Show page to maybe implement store

flash error messages

hours on business form

reverse geocoding in show page

Bonus: open now
