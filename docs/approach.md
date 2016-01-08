# HuskyNOM

[Heroku link][heroku]
[heroku]: http://huskynom.herokuapp.com

[Live link][live]
[live]: http://www.huskynom.com/

## Minimum Viable Product

HuskyNOM.com is a web application inspired by Yelp built using Ruby on Rails
and React.js. HuskyNOM is focused on the area around the University of
Washington and it allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Search businesses by name
- [ ] See search results in a list and accompanying map
- [ ] Visit business page to see information
- [ ] Create and read business reviews

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./views.md
[schema]: ./schema.md

## Implementation Timeline

### Phase 1: User Authentication, Business Model, Review Model, and JSON API (1.5 days)

In Phase 1, I will begin by implementing user signup and authentication (using
BCrypt). There will be a landing page after signup that will have two main
containers. One that includes top rated businesses (BusinessIndexItem React component)
and one for most recent reviews (Review React component). Before building out the
front end, I will begin by setting up a full JSON API for Businesses and Reviews.

[Details][phase-one]

### Phase 2: Flux Architecture, Business CRUD, Search (2 days)

Phase 2 is focused on setting up Flux, the React Router, and the React view
structure for the main application. After the basic Flux architecture has been
set up, a Business store will be implemented and a set of actions
corresponding to the needed CRUD functionality created. Once this is done, I
will create React views for the Business `Index`, `IndexItem`, and `Form`.
At the end of Phase 2, Businesses can be created, read, edited and destroyed in
the browser and should save to the database. Businesses can also be searched for
using the search bar.

[Details][phase-two]

### Phase 3: More Flux Architecture and Review CRUD (2 days)

Phase 3 will be a similar process to Phase 2, but it will be focused on the Reviews.
The Reviews will be acting as a join table and will become integrated
with both the Users and the Businesses at this time. React views for the Review
`Index`, `IndexItem`, and `Form` will be implemented. At the end of Phase 3,
users should be able to visit a business' page and leave a review, as well as
edit and delete their own review submissions.

[Details][phase-three]

### Phase 4: Google Maps API and Images (1.5 days)

In Phase 4, the Google Maps API will be implemented to show search results in
map form as well as a map view on each business page. This will also be the
time to set up the image model and ensure there is a polymorphic relationship
so that Users, Businesses, and Reviews can all have pictures associated with them.

[Details][phase-four]

### Phase 5: Styling and Database Seeding (1.5 days)

Throughout the project, very basic styling will have been used to organize the
pages. In Phase 5, this styling will be completed with the help of Bootstrap.
Additionally, the database will be seeded with several businesses and reviews.

[Details][phase-five]

### Bonus Features (TBD)
- [ ] Upvote/downvote reviews
- [ ] Comment on reviews
- [ ] Add restaurant menus
- [ ] Polymorphic relationship for Images

[phase-one]: ./phases/phase1.md
[phase-two]: ./phases/phase2.md
[phase-three]: ./phases/phase3.md
[phase-four]: ./phases/phase4.md
[phase-five]: ./phases/phase5.md
