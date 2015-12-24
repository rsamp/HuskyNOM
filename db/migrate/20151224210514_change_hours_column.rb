class ChangeHoursColumn < ActiveRecord::Migration
  def change
    change_column :businesses, :hours, :text
    rename_column :businesses, :hours, :information
  end
end
