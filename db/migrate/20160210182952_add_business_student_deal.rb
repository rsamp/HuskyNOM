class AddBusinessStudentDeal < ActiveRecord::Migration
  def change
    add_column :businesses, :student_deal, :string, default: nil
  end
end
