class CreateMovieNights < ActiveRecord::Migration
  def change
    create_table :movie_nights do |t|
      t.integer :host_id, null: false
      t.integer :video_id, null: false
      t.string  :title
      t.date    :date, null: false
      t.time    :time, null: false
      t.boolean :active, null: false, default: false
      t.string  :currency

      t.index :host_id
      t.index :video_id
      t.index :title

      t.timestamps null: false
    end
  end
end
