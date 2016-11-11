class RemoveVideoUrlUniqueness < ActiveRecord::Migration
  def change
    remove_index :videos, :video_url
    add_index :videos, :video_url
  end
end
