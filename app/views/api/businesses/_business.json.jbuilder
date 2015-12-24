json.extract!(
  business, :id, :name, :lat, :lng, :address, :description, :delivery,
            :accept_cc, :image_id, :images, :average_rating)

json.reviews business.reviews do |review|
  json.partial!('api/reviews/review', review: review)
end

json.images business.images do |image|
  json.partial!('api/images/image', image: image)
end
