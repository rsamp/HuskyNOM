class Business < ActiveRecord::Base
  validates :name, :category, :lat, :lng, presence: true

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

end
