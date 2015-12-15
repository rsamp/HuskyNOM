class Business < ActiveRecord::Base
  validates :name, :category, :lat, :lng, presence: true

  has_many :images

end
