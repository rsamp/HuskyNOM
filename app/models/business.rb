class Business < ActiveRecord::Base
  validates :name, :category, :lat, :lng, presence: true

  has_many :images

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])
    # top = bounds["northEast"]["lat"]
    # right = bounds["northEast"]["lng"]
    # bottom = bounds["southWest"]["lat"]
    # left = bounds["southWest"]["lng"]
    #
    # return Business.where("(lat BETWEEN ? AND ?) AND (lng BETWEEN ? AND ?)", bottom, top, left, right)
  end

end
