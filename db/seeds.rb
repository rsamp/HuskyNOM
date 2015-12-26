# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Business.delete_all
Review.delete_all
Image.delete_all
User.delete_all
User.create(username: "DemoUser", password: "Password")


# Users
20.times do
  userData = {
    username: Faker::Name.first_name,
    password: Faker::Internet.password(6)
  }

  User.create(userData)
end

# Businesses (real except for the description)
Business.create(name: "Chipotle Mexican Grill",
                lat: 47.6592353,
                lng: -122.3134728,
                address: "4229 University Way NE, Seattle, WA 98105, USA",
                description: Faker::Lorem.paragraphs(4),
                delivery: false,
                accept_cc: true,
                image_id: nil)
Business.create(name: "Banh Mi Unwrapped",
                lat: 47.6638562,
                lng: -122.3135354,
                address: "4725 University Way NE, Seattle, WA 98105, USA",
                description: Faker::Lorem.paragraphs(4),
                delivery: false,
                accept_cc: true,
                image_id: nil)
Business.create(name: "Aladdin Falafel Corner",
                lat: 47.6624936,
                lng: -122.3135355,
                address: "4541 University Way NE, Seattle, WA 98105, USA",
                description: Faker::Lorem.paragraphs(4),
                delivery: false,
                accept_cc: true,
                image_id: nil)
Business.create(name: "Thanh Vi",
                lat: 47.6591327,
                lng: -122.3128987,
                address: "4226 University Way NE, Seattle, WA 98105, USA",
                description: Faker::Lorem.paragraphs(4),
                delivery: false,
                accept_cc: true,
                image_id: nil)
Business.create(name: "Guanaco's Tacos Pupuseria",
                lat: 47.6571112,
                lng: -122.3140477,
                address: "4106 Brooklyn Ave NE #102a, Seattle, WA 98105, USA",
                description: Faker::Lorem.paragraphs(4),
                delivery: false,
                accept_cc: true,
                image_id: nil)
Business.create(name: "Portage Bay Café & Catering",
                lat: 47.6577795,
                lng: -122.3175253,
                address: "4130 Roosevelt Way NE, Seattle, WA 98105, USA",
                description: Faker::Lorem.paragraphs(4),
                delivery: false,
                accept_cc: true,
                image_id: nil)
Business.create(name: "MOD Pizza",
                lat: 47.658608,
                lng: -122.3123911,
                address: "George F. Russell Jr. Hall, 1414 NE 42nd St, Seattle, WA 98105, USA",
                description: Faker::Lorem.paragraphs(4),
                delivery: false,
                accept_cc: true,
                image_id: nil)
Business.create(name: "Burger and Kabob Hut",
                lat: 47.6581333,
                lng: -122.3129758,
                address: "4142 University Way NE, Seattle, WA 98105, USA",
                description: Faker::Lorem.paragraphs(4),
                delivery: false,
                accept_cc: true,
                image_id: nil)
Business.create(name: "EJ Burger",
                lat: 47.6616328,
                lng: -122.3131181,
                address: "4510 University Way NE, Seattle, WA 98105, USA",
                description: Faker::Lorem.paragraphs(4),
                delivery: false,
                accept_cc: true,
                image_id: nil)
Business.create(name: "Itadakimasu",
                lat: 47.6643577,
                lng: -122.3144566,
                address: "4743 Brooklyn Ave NE, Seattle, WA 98105, USA",
                description: Faker::Lorem.paragraphs(4),
                delivery: false,
                accept_cc: true,
                image_id: nil)
Business.create(name: "Thai Tom",
                lat: 47.6625525,
                lng: -122.313329,
                address: "4543 University Way NE, Seattle, WA 98105, USA",
                description: Faker::Lorem.paragraphs(4),
                delivery: false,
                accept_cc: false,
                image_id: nil)
Business.create(name: "Mr Lu’s Burgers & Seafood",
                lat: 47.6646239,
                lng: -122.3127929,
                address: "4752 University Way NE, Seattle, WA 98105, USA",
                description: Faker::Lorem.paragraphs(4),
                delivery: true,
                accept_cc: true,
                image_id: nil)
Business.create(name: "Which Wich",
                lat: 47.6638595,
                lng: -122.3127645,
                address: "4730 University Way NE #102, Seattle, WA 98105, USA",
                description: Faker::Lorem.paragraphs(4),
                delivery: false,
                accept_cc: true,
                image_id: nil)
Business.create(name: "Noodle Nation",
                lat: 47.659263,
                lng: -122.312951,
                address: "4232 University Way NE, Seattle, WA 98105, USA",
                description: Faker::Lorem.paragraphs(4),
                delivery: false,
                accept_cc: true,
                image_id: nil)
Business.create(name: "Pizza Ragazzi",
                lat: 47.6666598,
                lng: -122.3133993,
                address: "5201 University Way NE, Seattle, WA 98105, USA",
                description: Faker::Lorem.paragraphs(4),
                delivery: true,
                accept_cc: true,
                image_id: nil)
Business.create(name: "Earl’s On the Avenue",
                lat: 47.6608176,
                lng: -122.3134618,
                address: "4333 University Way NE, Seattle, WA 98105, USA",
                description: Faker::Lorem.paragraphs(4),
                delivery: true,
                accept_cc: true,
                image_id: nil)
Business.create(name: "Finn MacCools Irish Pub & Restaurant",
                lat: 47.6588737,
                lng: -122.3134989,
                address: "4217 University Way NE, Seattle, WA 98105, USA",
                delivery: false,
                accept_cc: true,
                image_id: nil)
Business.create(name: "Jimmy John’s",
                lat: 47.658097,
                lng: -122.3136501,
                address: "4141 University Way NE, Seattle, WA 98105, USA",
                description: Faker::Lorem.paragraphs(4),
                delivery: true,
                accept_cc: true,
                image_id: nil)
Business.create(name: "Thaiger Room",
                lat: 47.6591942,
                lng: -122.3129028,
                address: "4228 University Way NE, Seattle, WA 98105, USA",
                description: Faker::Lorem.paragraphs(4),
                delivery: true,
                accept_cc: true,
                image_id: nil)
Business.create(name: "Taste of India",
                lat: 47.6690513,
                lng: -122.3175771,
                address: "5517 Roosevelt Way NE, Seattle, WA 98105, USA",
                description: Faker::Lorem.paragraphs(4),
                delivery: true,
                accept_cc: true,
                image_id: nil)
Business.create(name: "Pagliacci Pizza",
                lat: 47.6621632,
                lng: -122.3134133,
                address: "4529 University Way NE, Seattle, WA 98105, USA",
                description: Faker::Lorem.paragraphs(4),
                delivery: true,
                accept_cc: true,
                image_id: nil)
Business.create(name: "Delfino’s Chicago Style Pizza",
                lat: 47.6632857,
                lng: -122.299267,
                address: "2631 NE University Village St, Seattle, WA 98105, USA",
                description: Faker::Lorem.paragraphs(4),
                delivery: true,
                accept_cc: true,
                image_id: nil)
Business.create(name: "Thai 65",
                lat: 47.6587736,
                lng: -122.3128673,
                address: "4214 University Way NE, Seattle, WA 98105, USA",
                description: Faker::Lorem.paragraphs(4),
                delivery: true,
                accept_cc: true,
                image_id: nil)

# Reviews

160.times do
  reviewData = {
    author_id: User.all.sample.id,
    business_id: Business.all.sample.id,
    rating: Faker::Number.between(1, 5),
    body: Faker::Lorem.paragraphs(8),
    created_at: Faker::Time.between(2.years.ago, Time.now, :all)
  }

  Review.create(reviewData)
end
