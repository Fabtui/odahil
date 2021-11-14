class CreateTattoos < ActiveRecord::Migration[6.1]
  def change
    create_table :tattoos do |t|
      t.string :name
      t.text :description
      t.datetime :date
      t.string :customer
      t.boolean :on_home_slider, default: false

      t.timestamps
    end
  end
end
