# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
# #
# # Examples:
# #
# #   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
# #   Mayor.create(name: 'Emanuel', city: cities.first)
#
require 'yelp'

client = Yelp::Client.new({ consumer_key: ENV['YELP_CONSUMER_KEY'],
                            consumer_secret: ENV['YELP_CONSUMER_SECRET'],
                            token: ENV['YELP_TOKEN'],
                            token_secret: ENV['YELP_TOKEN_SECRET']
                          })

Business.delete_all
Review.delete_all
Image.delete_all
User.delete_all
User.create(username: "DemoUser", password: "Password")
User.create(username: "YelpUser", password: "YelpPassword")
yelp_user_id = User.last.id

offset = 0
until Business.count == 60
  params = { term: 'food',
             location: 'U District, Seattle, WA',
             offset: offset
           }

  businessesApiCall = client.search('U District, Seattle, WA', params)


  businessesApiCall.businesses.each do |business|
    id = business.id
    id = 'ugly-mug-cafe-and-coffee-roasters-seattle-2' if id == 'ugly-mug-café-and-coffee-roasters-seattle-2'
    id = 'portage-bay-cafe-and-catering-seattle-3' if id == 'portage-bay-café-and-catering-seattle-3'
    id = 'casa-patron-seattle-3' if id == 'casa-patrón-seattle-3'
    id = 'bizzarro-italian-cafe-seattle-2' if id == 'bizzarro-italian-café-seattle-2'

    business = client.business(id).business

    Business.create!(name: business.name,
                    lat: business.location.coordinate.latitude,
                    lng: business.location.coordinate.longitude,
                    address: business.location.display_address.join("\n"),
                    categories: business.categories,
                    phone: business.phone,
                    yelp_image_url: business.image_url,
                    description: Faker::Lorem.paragraphs(4).join(" "),
                    delivery: nil,
                    accept_cc: nil,
                    image_id: nil,
                    yelp_url: business.url,
                    is_yelp_business: true)


    business_id = Business.last.id

    business.reviews.each do |review|
      Review.create!(author_id: yelp_user_id,
                     business_id: business_id,
                     rating: review.rating,
                     body: review.excerpt,
                     yelp_url: review.rating_image_large_url,
                     yelp_username: review.user['name'],
                     yelp_user_image: review.user['image_url'],
                     is_yelp_review: true)
    end
  end
  offset += 20
end



#
#
# Users
40.times do
  userData = {
    username: Faker::Name.first_name,
    password: Faker::Internet.password(6)
  }
  begin
    User.create(userData)
  rescue
    PG::UniqueViolation
  end
end
#
# # Businesses and respective images
# Business.create(name: "Chipotle Mexican Grill",
#                 lat: 47.6592353,
#                 lng: -122.3134728,
#                 address: "4229 University Way NE, Seattle, WA 98105, USA",
#                 description: Faker::Lorem.paragraphs(4).join(" "),
#                 delivery: false,
#                 accept_cc: true,
#                 image_id: nil)
# chipotle = Business.where(name: "Chipotle Mexican Grill")
# Image.create(cloudinary_id: "tuthdqduje9b35xfogfh",
#              business_id: chipotle.ids[0])
# Image.create(cloudinary_id: "y93zn8haybkahcjfwzxx",
#              business_id: chipotle.ids[0])
#
# Business.create(name: "Aladdin Falafel Corner",
#                 lat: 47.6624936,
#                 lng: -122.3135355,
#                 address: "4541 University Way NE, Seattle, WA 98105, USA",
#                 description: Faker::Lorem.paragraphs(4).join(" "),
#                 delivery: false,
#                 accept_cc: true,
#                 image_id: nil)
# alladin = Business.where(name: "Aladdin Falafel Corner")
# Image.create(cloudinary_id: "vptmcddoepj1exbknagc",
#              business_id: alladin.ids[0])
#
# Business.create(name: "Guanaco’s Tacos Pupuseria",
#                 lat: 47.6571112,
#                 lng: -122.3140477,
#                 address: "4106 Brooklyn Ave NE #102a, Seattle, WA 98105, USA",
#                 description: Faker::Lorem.paragraphs(4).join(" "),
#                 delivery: false,
#                 accept_cc: true,
#                 image_id: nil)
# guanacos = Business.where(name: "Guanaco’s Tacos Pupuseria")
# Image.create(cloudinary_id: "kozrlzy2qxjnpadqv1lj",
#              business_id: guanacos.ids[0])
# Image.create(cloudinary_id: "aetridx83nmczrzfcgzu",
#             business_id: guanacos.ids[0])
# Image.create(cloudinary_id: "npzbgjmeinbkvewyhnfu",
#              business_id: guanacos.ids[0])
#
# Business.create(name: "Portage Bay Café & Catering",
#                 lat: 47.6577795,
#                 lng: -122.3175253,
#                 address: "4130 Roosevelt Way NE, Seattle, WA 98105, USA",
#                 description: Faker::Lorem.paragraphs(4).join(" "),
#                 delivery: false,
#                 accept_cc: true,
#                 image_id: nil)
# portage = Business.where(name: "Portage Bay Café & Catering")
# Image.create(cloudinary_id: "m8dssqitry3ltc7oidkp",
#              business_id: portage.ids[0])
#
# Business.create(name: "MOD Pizza",
#                 lat: 47.658608,
#                 lng: -122.3123911,
#                 address: "George F. Russell Jr. Hall, 1414 NE 42nd St, Seattle, WA 98105, USA",
#                 description: Faker::Lorem.paragraphs(4).join(" "),
#                 delivery: false,
#                 accept_cc: true,
#                 image_id: nil)
# mod = Business.where(name: "MOD Pizza")
# Image.create(cloudinary_id: "muleukeiddabycxiyxc2",
#             business_id: mod.ids[0])
#
# Business.create(name: "Burger and Kabob Hut",
#                 lat: 47.6581333,
#                 lng: -122.3129758,
#                 address: "4142 University Way NE, Seattle, WA 98105, USA",
#                 description: Faker::Lorem.paragraphs(4).join(" "),
#                 delivery: false,
#                 accept_cc: true,
#                 image_id: nil)
# burgerhut = Business.where(name: "Burger and Kabob Hut")
# Image.create(cloudinary_id: "hw3ujw75a15ck6rqm4b6",
#             business_id: burgerhut.ids[0])
# Image.create(cloudinary_id: "jzdlyzjh5ujr2kfqhyuv",
#             business_id: burgerhut.ids[0])
#
# Business.create(name: "EJ Burger",
#                 lat: 47.6616328,
#                 lng: -122.3131181,
#                 address: "4510 University Way NE, Seattle, WA 98105, USA",
#                 description: Faker::Lorem.paragraphs(4).join(" "),
#                 delivery: false,
#                 accept_cc: true,
#                 image_id: nil)
# ej = Business.where(name: "EJ Burger")
# Image.create(cloudinary_id: "yycnebqcfl2g12hsmwhr",
#              business_id: ej.ids[0])
# Image.create(cloudinary_id: "wqoqwi7cetrzrntqlyde",
#             business_id: ej.ids[0])
#
# Business.create(name: "Itadakimasu",
#                 lat: 47.6643577,
#                 lng: -122.3144566,
#                 address: "4743 Brooklyn Ave NE, Seattle, WA 98105, USA",
#                 description: Faker::Lorem.paragraphs(4).join(" "),
#                 delivery: false,
#                 accept_cc: true,
#                 image_id: nil)
# itadakimasu = Business.where(name: "Itadakimasu")
# Image.create(cloudinary_id: "tvvpuj6rlhplixlj9txi",
#             business_id: itadakimasu.ids[0])
# Image.create(cloudinary_id: "rbsvphwahiypr0smraq5",
#             business_id: itadakimasu.ids[0])
#
# Business.create(name: "Thai Tom",
#                 lat: 47.6625525,
#                 lng: -122.313329,
#                 address: "4543 University Way NE, Seattle, WA 98105, USA",
#                 description: Faker::Lorem.paragraphs(4).join(" "),
#                 delivery: false,
#                 accept_cc: false,
#                 image_id: nil)
# thaitom = Business.where(name: "Thai Tom")
# Image.create(cloudinary_id: "jzgppjrkhh9dwgp9vgm8",
#             business_id: thaitom.ids[0])
# Image.create(cloudinary_id: "vuxmx6ivesox8jqtmzrg",
#             business_id: thaitom.ids[0])
# Image.create(cloudinary_id: "yoaqeobpk8zsyikccgye",
#             business_id: thaitom.ids[0])
#
# Business.create(name: "Mr Lu’s Burgers & Seafood",
#                 lat: 47.6646239,
#                 lng: -122.3127929,
#                 address: "4752 University Way NE, Seattle, WA 98105, USA",
#                 description: Faker::Lorem.paragraphs(4).join(" "),
#                 delivery: true,
#                 accept_cc: true,
#                 image_id: nil)
# mrlus = Business.where(name: "Mr Lu’s Burgers & Seafood")
# Image.create(cloudinary_id: "josep8kjpiszv8puuwl1",
#             business_id: mrlus.ids[0])
#
# Business.create(name: "Which Wich",
#                 lat: 47.6638595,
#                 lng: -122.3127645,
#                 address: "4730 University Way NE #102, Seattle, WA 98105, USA",
#                 description: Faker::Lorem.paragraphs(4).join(" "),
#                 delivery: false,
#                 accept_cc: true,
#                 image_id: nil)
# whichwich = Business.where(name: "Which Wich")
# Image.create(cloudinary_id: "xksoopuqjxdf4wamamc7",
#              business_id: whichwich.ids[0])
# Image.create(cloudinary_id: "rteuz0i7qlhpkr6vzbmn",
#              business_id: whichwich.ids[0])
# Image.create(cloudinary_id: "h3qjhej2xy0d84ragdyy",
#              business_id: whichwich.ids[0])
#
# Business.create(name: "Pizza Ragazzi",
#                 lat: 47.6666598,
#                 lng: -122.3133993,
#                 address: "5201 University Way NE, Seattle, WA 98105, USA",
#                 description: Faker::Lorem.paragraphs(4).join(" "),
#                 delivery: true,
#                 accept_cc: true,
#                 image_id: nil)
# ragazzi = Business.where(name: "Pizza Ragazzi")
# Image.create(cloudinary_id: "ubuajwbi2krzarytzoof",
#              business_id: ragazzi.ids[0])
# Image.create(cloudinary_id: "djyv0jgzksi21rtnazro",
#              business_id: ragazzi.ids[0])
# Image.create(cloudinary_id: "dlwv2v7eoent4ve7quhj",
#              business_id: ragazzi.ids[0])
# Image.create(cloudinary_id: "vdexi0xdujjvlctfegky",
#              business_id: ragazzi.ids[0])
#
# Business.create(name: "Earl’s On the Avenue",
#                 lat: 47.6608176,
#                 lng: -122.3134618,
#                 address: "4333 University Way NE, Seattle, WA 98105, USA",
#                 description: Faker::Lorem.paragraphs(4).join(" "),
#                 delivery: true,
#                 accept_cc: true,
#                 image_id: nil)
# earls = Business.where(name: "Earl’s On the Avenue")
# Image.create(cloudinary_id: "lvcweairou1igfvfhjyu",
#              business_id: earls.ids[0])
# Image.create(cloudinary_id: "suolsxd56f7ufg1zzhdr",
#              business_id: earls.ids[0])
# Image.create(cloudinary_id: "gduth17nouchgx8xfpdg",
#              business_id: earls.ids[0])
#
# Business.create(name: "Finn MacCools Irish Pub",
#                 lat: 47.6588737,
#                 lng: -122.3134989,
#                 address: "4217 University Way NE, Seattle, WA 98105, USA",
#                 description: Faker::Lorem.paragraphs(4).join(" "),
#                 delivery: false,
#                 accept_cc: true,
#                 image_id: nil)
# finns = Business.where(name: "Finn MacCools Irish Pub")
# Image.create(cloudinary_id: "sdhgahgbla4kdl72onfn",
#              business_id: finns.ids[0])
# Image.create(cloudinary_id: "nz0bgkprdwnrokc9zcsm",
#              business_id: finns.ids[0])
# Image.create(cloudinary_id: "dul3xpnhp0vel3i1xekf",
#              business_id: finns.ids[0])
#
# Business.create(name: "Jimmy John’s",
#                 lat: 47.658097,
#                 lng: -122.3136501,
#                 address: "4141 University Way NE, Seattle, WA 98105, USA",
#                 description: Faker::Lorem.paragraphs(4).join(" "),
#                 delivery: true,
#                 accept_cc: true,
#                 image_id: nil)
# jjs = Business.where(name: "Jimmy John’s")
# Image.create(cloudinary_id: "yludyfs5ly0ce8hxx05b",
#              business_id: jjs.ids[0])
# Image.create(cloudinary_id: "dvjtmojs45cjqfmfarly",
#              business_id: jjs.ids[0])
# Image.create(cloudinary_id: "c7wutoiouw4feowv6ckk",
#              business_id: jjs.ids[0])
#
# Business.create(name: "Thaiger Room",
#                 lat: 47.6591942,
#                 lng: -122.3129028,
#                 address: "4228 University Way NE, Seattle, WA 98105, USA",
#                 description: Faker::Lorem.paragraphs(4).join(" "),
#                 delivery: true,
#                 accept_cc: true,
#                 image_id: nil)
# thaiger = Business.where(name: "Thaiger Room")
# Image.create(cloudinary_id: "bcuhtrdv0htzj4s8f36e",
#             business_id: thaiger.ids[0])
# Image.create(cloudinary_id: "ibu1os7w32v3ojjwcrls",
#             business_id: thaiger.ids[0])
# Image.create(cloudinary_id: "hwnnmtqlqhqvbzqihsaz",
#             business_id: thaiger.ids[0])
#
# Business.create(name: "Taste of India",
#                 lat: 47.6690513,
#                 lng: -122.3175771,
#                 address: "5517 Roosevelt Way NE, Seattle, WA 98105, USA",
#                 description: Faker::Lorem.paragraphs(4).join(" "),
#                 delivery: true,
#                 accept_cc: true,
#                 image_id: nil)
# toi = Business.where(name: "Taste of India")
# Image.create(cloudinary_id: "vtvoy7ua70jsl8jafac8",
#              business_id: toi.ids[0])
#
# Business.create(name: "Pagliacci Pizza",
#                 lat: 47.6621632,
#                 lng: -122.3134133,
#                 address: "4529 University Way NE, Seattle, WA 98105, USA",
#                 description: Faker::Lorem.paragraphs(4).join(" "),
#                 delivery: true,
#                 accept_cc: true,
#                 image_id: nil)
# pagliacci = Business.where(name: "Pagliacci Pizza")
# Image.create(cloudinary_id: "jsckndynuypv0btkcqox",
#             business_id: pagliacci.ids[0])
#
# Business.create(name: "Delfino’s Chicago Style Pizza",
#                 lat: 47.6632857,
#                 lng: -122.299267,
#                 address: "2631 NE University Village St, Seattle, WA 98105, USA",
#                 description: Faker::Lorem.paragraphs(4).join(" "),
#                 delivery: true,
#                 accept_cc: true,
#                 image_id: nil)
# delfinos = Business.where(name: "Delfino's Chicago Style Pizza")
# Image.create(cloudinary_id: "hlweuwbgrnu8kzybigeb",
#              business_id: delfinos.ids[0])
#
# Business.create(name: "Thai 65",
#                 lat: 47.6587736,
#                 lng: -122.3128673,
#                 address: "4214 University Way NE, Seattle, WA 98105, USA",
#                 description: Faker::Lorem.paragraphs(4).join(" "),
#                 delivery: true,
#                 accept_cc: true,
#                 image_id: nil)
# thai65 = Business.where(name: "Thai 65")
# Image.create(cloudinary_id: "fjavj6loozn1ygitdev6",
#              business_id: thai65.ids[0])
# Image.create(cloudinary_id: "wdgxnkcjh8iuaqvktf4z",
#              business_id: thai65.ids[0])
# Image.create(cloudinary_id: "xrj5ugcessg0rnnwedih",
#              business_id: thai65.ids[0])
# Image.create(cloudinary_id: "iblcotjm3ytlg8vmqfje",
#              business_id: thai65.ids[0])
#
# # Reviews
#
200.times do
  author = User.all.sample
  until author != 'YelpUser' && author != 'DemoUser'
    author = User.all.sample
  end

  reviewData = {
    author_id: author.id,
    business_id: Business.all.sample.id,
    rating: Faker::Number.between(1, 5),
    body: Faker::Lorem.paragraphs(6).join(" "),
    created_at: Faker::Time.between(2.years.ago, Time.now, :all)
  }

  Review.create(reviewData)
end
