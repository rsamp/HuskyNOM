class RemoveBusinessesCategory < ActiveRecord::Migration
  def change
    remove_column :businesses, :category
  end
end
