class Business < ActiveRecord::Base
  validates :name, :category, :lat, :lng, presence: true

  has_many :images

  # def self.in_bounds(bounds)
  #   Business.where("lat < ?", bounds[:northEast][:lat])
  #       .where("lat > ?", bounds[:southWest][:lat])
  #       .where("lng > ?", bounds[:southWest][:lng])
  #       .where("lng < ?", bounds[:northEast][:lng])
  #   # top = bounds["northEast"]["lat"]
  #   # right = bounds["northEast"]["lng"]
  #   # bottom = bounds["southWest"]["lat"]
  #   # left = bounds["southWest"]["lng"]
  #   #
  #   # return Business.where("(lat BETWEEN ? AND ?) AND (lng BETWEEN ? AND ?)", bottom, top, left, right)
  # end
  #
  # def self.match_delivery(delivery)
  #   Business.where("delivery IS ?", delivery)
  # end
  #
  # def self.match_credit_card(accept_cc)
  #   Business.where("accept_cc IS ?", accept_cc)
  # end

  def self.filter_all(bounds, delivery, accept_cc)
    businesses = Business.all
    if bounds
      businesses.where("lat < ?", bounds[:northEast][:lat])
          .where("lat > ?", bounds[:southWest][:lat])
          .where("lng > ?", bounds[:southWest][:lng])
          .where("lng < ?", bounds[:northEast][:lng])
    end
    if delivery
      businesses.where(delivery: delivery)
    end
    if accept_cc
      businesses.where(accept_cc: accept_cc)
    end
    businesses
  end

end
