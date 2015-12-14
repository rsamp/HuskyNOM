# Phase 2: Flux Architecture, Business CRUD, Search, and Map (2 days)

## Rails
### Models

### Controllers

### Views
* Landing page (minus Reviews)

## Flux
### Views (React Components)
* BusinessesIndex
  - BusinessesIndexItem
* BusinessForm

### Stores
* Business

### Actions
* ApiActions.receiveAllBusinesses -> triggered by ApiUtil
* ApiActions.receiveSingleBusiness
* ApiActions.deleteBusiness
* BusinessActions.fetchAllBusinesses -> triggers ApiUtil
* BusinessActions.fetchSingleBusiness
* BusinessActions.createBusiness
* BusinessActions.editBusiness
* BusinessActions.destroyBusiness

### ApiUtil
* ApiUtil.fetchAllBusinesses
* ApiUtil.fetchSingleBusiness
* ApiUtil.createBusiness
* ApiUtil.editBusiness
* ApiUtil.destroyBusiness

## Gems/Libraries
* Flux Dispatcher (npm)
