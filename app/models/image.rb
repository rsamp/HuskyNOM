class Image < ActiveRecord::Base
  validates :cloudinary_id, :business_id, presence: true

  belongs_to :business
end
