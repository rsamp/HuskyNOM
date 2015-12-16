# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Business.create(name: "Business1", category: "bar", lat: 47.655, lng: -122.308)
Business.create(name: "Business2", category: "bar", lat: 47.675, lng: -122.318, delivery: true, accept_cc: true)
Business.create(name: "Business3", category: "bar", lat: 47.665, lng: -122.313, delivery: false, accept_cc: false)
