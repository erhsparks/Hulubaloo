class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.text    :body, null: false
      t.integer :author_id, null: false
      t.integer :showing_id, null: false
      t.integer :parent_id

      t.index   :author_id
      t.index   :showing_id
      t.index   :parent_id

      t.timestamps null: false
    end
  end
end
