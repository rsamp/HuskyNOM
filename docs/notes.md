# Notes:

UW Color Scheme:

Purple: #4b2e83
Gold: #e8e3d3
Metallic Gold: #85754d
Dark Gray: #444444
Light Gray: #d9d9d9

Wireframe purple: #8856a1

## Come back to

After adding Image model, revisit BusinessIndexItem and Business Page. Will also need default "no-image" image

just have map and search on homepage. this would take away the bestOf and the recentActivity. changed Index.jsx

refactoring opportunities: reviewIndex - instead of the if statement in render, perform a filter in the model

do review creation through controller with access to current user

search.jsx setinterval
Map Loading... -> No results Search.jsx: Use the store to know when results are finished being filtered. Similar issue with if no reviews yet for a business

look up LinkState instead of individual handlers onChange - Form.jsx

revisit printing of Date. can I use new Date(pass any format here)?

show stars in review index item
set minimum rating. use flash errors? could be annoying with react.

remove "non-react" message from root

how to defend against entering something in address bar manually. breaks functionality of site

revisit business Show page to maybe implement store

flash error messages

hours on business form

Bonus: open now

improve markers: change color on index item hover, have an onclick balloon

2048 lakeshore ave, oakland, ca, 94606

idea for images on business submit form:
after uploading, show image and an option to delete

pagination - business index, reviews, images

sorting by reviews, top rated, etc

1. master review doesn't change
refetch business on create review
2. strategy for showing only ~10 businesses at a time
3. ordering businesses by rating - average rating isn't in db - just do it in frontend?

edit reviews

stars don't change when business change from searchbar

profile page

spacing of filters- buttons maybe?


BusinessIndex Sort

Peer feedback:
reduce space between top of page and logo as well as logo to sign in/up area

make sure "next 10" doesn't show up if at the end

put images in a box

formatting of review index item:
make user area a bit bigger, take away "Date:" and "Body:"

password confirmation on sign up

long username goes into review. set max on length

drag map to find more

parse over entire string for search

validate against empty stars
