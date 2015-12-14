# Phase 2: Flux Architecture and Note CRUD (3 days)

## Rails
### Models

### Controllers

### Views

## Flux
### Views (React Components)
* BusinessesIndex
  - BusinessesIndexItem
  - ReviewIndexItem
  - ReviewForm
* BusinessForm
* ReviewIndex
  - ReviewIndexItem

### Stores
* Business
* Review

### Actions
* ApiActions.receiveAllBusinesses -> triggered by ApiUtil
* ApiActions.receiveSingleBusiness
* BusinessActions.fetchAllBusinesses -> triggers ApiUtil
* BusinessActions.fetchSingleBusiness
* BusinessActions.createBusiness
* BusinessActions.editBusiness
* ApiActions.receiveAllReviews -> triggered by ApiUtil
* ApiActions.receiveSingleReview
* ApiActions.deleteReview
* ReviewActions.fetchAllReviews -> triggers ApiUtil
* ReviewActions.fetchSingleReview
* ReviewActions.createReview
* ReviewActions.editReview
* ReviewActions.destroyReview

### ApiUtil
* ApiUtil.fetchAllBusinesses
* ApiUtil.fetchSingleBusiness
* ApiUtil.createBusiness
* ApiUtil.fetchAllReviews
* ApiUtil.fetchSingleReview
* ApiUtil.createReview
* ApiUtil.editReview
* ApiUtil.destroyReview

## Gems/Libraries
* Flux Dispatcher (npm)
