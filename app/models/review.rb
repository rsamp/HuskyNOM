class Review < ActiveRecord::Base
  validates :author_id, :business_id, :rating, :body, presence: true
  # validates :rating, inclusion: { in: 1..5 }

  belongs_to :business

  belongs_to :author,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: "User"

end
