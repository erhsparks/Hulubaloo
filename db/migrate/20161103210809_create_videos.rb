class CreateVideos < ActiveRecord::Migration
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.string :video_url, null: false
      t.string :preview_image_url, null: false

      t.index :title
      t.index :video_url, unique: true

      t.timestamps null: false
    end
  end
end
