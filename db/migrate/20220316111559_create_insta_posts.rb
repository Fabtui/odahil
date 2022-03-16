class CreateInstaPosts < ActiveRecord::Migration[6.1]
  def change
    create_table :insta_posts do |t|
      t.string :image
      t.integer :like
      t.string :link

      t.timestamps
    end
  end
end
