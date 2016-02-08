class AddIsYelpBooleans < ActiveRecord::Migration
  def change
    add_column :businesses, :is_yelp_business, :boolean, default: false
    add_column :reviews, :is_yelp_review, :boolean, default: false
    add_column :businesses, :yelp_image_url, :string, default: nil
  end
end
