class RemoveBusinessInformation < ActiveRecord::Migration
  def change
    remove_column :businesses, :information, :text
  end
end
