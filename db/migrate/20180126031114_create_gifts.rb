class CreateGifts < ActiveRecord::Migration[5.1]
  def change
    create_table :gifts do |t|
      t.string :nickname
      t.date :dob
      t.string :gift

      t.timestamps
    end
  end
end
