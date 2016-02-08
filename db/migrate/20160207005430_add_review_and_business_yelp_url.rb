class AddReviewAndBusinessYelpUrl < ActiveRecord::Migration
  def change
    add_column :reviews, :yelp_url, :string, default: nil
    add_column :reviews, :yelp_username, :string, default: nil
    add_column :reviews, :yelp_user_image, :string, default: nil
    add_column :businesses, :yelp_url, :string, default: nil
    add_column :businesses, :categories, :string, default: nil
    add_column :businesses, :phone, :string, default: nil
    add_column :businesses, :is_closed, :boolean, default: true
  end
end
