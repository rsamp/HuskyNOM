class Review < ActiveRecord::Base
  validates :author_id, :business_id, :rating, :body, presence: true

  belongs_to :business

  belongs_to :author,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: "User"

end
