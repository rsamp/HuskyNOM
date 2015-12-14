# HuskyNOM

[Heroku link][heroku]

[heroku]: http://www.huskynom.herokuapp.com

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
- [ ] Create and read restaurant reviews

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Business Model, Review Model, and JSON API (2 days)

In Phase 1, I will begin by implementing user signup and authentication (using
BCrypt). There will be a landing page after signup that will have two main
containers. One that includes top rated businesses (BusinessIndexItem React component)
and one for most recent reviews (Review React component). Before building out the
front end, I will begin by setting up a full JSON API for Restaurants and Reviews.

[Details][phase-one]

### Phase 2: Flux Architecture and Restaurant/Review CRUD (3 days)

Phase 2 is focused on setting up Flux, the React Router, and the React view
structure for the main application. After the basic Flux architecture has been
set up, Restaurant and Review stores will be implemented and a set of actions
corresponding to the needed CRUD functionality created. Once this is done, I
will create React views for the Business `Index`, `IndexItem` and `Form` as
well as the Review `Index`, `IndexItem` and `Form`. At the end of Phase 2,
Businesses and Reviews can be created, read, edited and destroyed in the browser.
Both should save to the database.

[Details][phase-two]

### Phase 3: Notebooks and Tags (2 days)

Phase 3 adds organization to the Notes. Notes belong to a Notebook, which has
its own `Index` view. Create JSON API for Notebooks. Notes can also now be
tagged with multiple tags. Users can bring up notes in a separate `SearchIndex`
view by searching for their tags. Once the tag search is implemented, I will
extend this to a fuzzy search through every Note's content.

[Details][phase-three]

### Phase 4: Allow Complex Styling in Notes (1 day)

Using the react-quill library (based on Quill.js), allow for complex styling of
notes.

[Details][phase-four]

### Phase 5: Reminders and Garbage Collection (1 day)

Phase 5 introduces two new features. First, users can set reminders on notes
which will at the time they are set for prompt the user to review and edit the
given note. In addition, I will implement a feature that asks users to review
notes once they reach a certain age and ask whether they should be kept,
archived, or deleted.

[Details][phase-five]

### Phase 6: Styling Cleanup and Seeding (1 day)

Bootstrap will have been used to keep things organized up until now, but in
Phase 6 I will add styling flourishes and make modals out of some elements (like
the NotebookForm).

### Bonus Features (TBD)
- [ ] Upvote/downvote reviews
- [ ] Comment on reviews
- [ ] Add restaurant menus

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
