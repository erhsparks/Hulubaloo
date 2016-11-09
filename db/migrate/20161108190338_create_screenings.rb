class CreateScreenings < ActiveRecord::Migration
  def change
    create_table :screenings do |t|
      t.integer :movie_night_id, null: false
      t.integer :viewer_id, null: false

      t.index   [:movie_night_id, :viewer_id], unique: true
      t.index   :viewer_id

      t.timestamps null: false
    end
  end
end
