class RemoveImagesMainColumn < ActiveRecord::Migration
  def change
    remove_column :images, :main
  end
end
