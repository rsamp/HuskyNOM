class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string :cloudinary_id, null: false
      t.integer :business_id, null: false
      t.boolean :main, null: false, default: false

      t.timestamps null: false
    end

    add_index :images, :business_id
  end
end
