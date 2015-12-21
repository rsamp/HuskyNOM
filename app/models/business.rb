class Business < ActiveRecord::Base
  validates :name, :lat, :lng, presence: true

  has_many :images
  has_many :reviews

  def self.filter_all(bounds, delivery, accept_cc)
    businesses = Business.all

    # Filter based on current map bounds
    if bounds
      businesses = businesses.where("lat < ?", bounds[:northEast][:lat])
                             .where("lat > ?", bounds[:southWest][:lat])
                             .where("lng > ?", bounds[:southWest][:lng])
                             .where("lng < ?", bounds[:northEast][:lng])
    end

    # For these two, only filter if the box is checked. Don't want to
    # filter out places that offer delivery just because the box isn't checked.
    if delivery == "true"
      businesses = businesses.where(delivery: delivery)
    end
    if accept_cc == "true"
      businesses = businesses.where(accept_cc: accept_cc)
    end

    businesses
  end

  def average_rating
    return nil if reviews.count == 0
    total_stars = 0

    reviews.each do |review|
      total_stars += review.rating
    end

    avg = 1.0 * total_stars / reviews.count

    # Rounds to nearest 1/12
    (avg * 12).round.to_f/12
  end

end
