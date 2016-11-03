class CreateVideoCategorizings < ActiveRecord::Migration
  def change
    create_table :video_categorizings do |t|
      t.integer :video_id, null: false
      t.integer :category_id, null: false

      t.index [:video_id, :category_id], unique: true
      t.index :category_id

      t.timestamps null: false
    end
  end
end
