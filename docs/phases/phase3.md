# Phase 3: More Flux Architecture, Review CRUD, and Images (2 days)

## Rails
### Models

### Controllers

### Views
* Landing Page (complete)

## Flux
### Views (React Components)
* BusinessesIndex
  - ReviewIndexItem
  - ReviewForm
* ReviewIndex
  - ReviewIndexItem

### Stores
* Review

### Actions
* ApiActions.receiveAllReviews -> triggered by ApiUtil
* ApiActions.receiveSingleReview
* ApiActions.deleteReview
* ReviewActions.fetchAllReviews -> triggers ApiUtil
* ReviewActions.fetchSingleReview
* ReviewActions.createReview
* ReviewActions.editReview
* ReviewActions.destroyReview

### ApiUtil
* ApiUtil.fetchAllReviews
* ApiUtil.fetchSingleReview
* ApiUtil.createReview
* ApiUtil.editReview
* ApiUtil.destroyReview

## Gems/Libraries
