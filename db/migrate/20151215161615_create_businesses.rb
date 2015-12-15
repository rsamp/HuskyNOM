class CreateBusinesses < ActiveRecord::Migration
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.string :category, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.string :address
      t.string :hours
      t.boolean :delivery
      t.boolean :accept_cc
      t.integer :image_id

      t.timestamps null: false
    end
  end
end
