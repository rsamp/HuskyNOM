# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Business.delete_all
Business.create(name: "Chipotle", category: "restaurant", lat: 47.6589878, lng: -122.3126178, delivery: false, accept_cc: true)
Business.create(name: "Business2", category: "bar", lat: 47.675, lng: -122.318, delivery: true, accept_cc: true)
Business.create(name: "Business3", category: "bar", lat: 47.665, lng: -122.313, delivery: false, accept_cc: false)

# User.delete_all
# User.create!(username: "user1", password_digest: "testaccount", session_token: "testaccount")
#
# b = Business.where(name: "Chipotle")
# u = User.where(username: "user1")
#
# Review.delete_all
# Review.create!(author_id: u[0].id, business_id: b[0].id, rating: 3, body: "this is my review of Chipotle")
