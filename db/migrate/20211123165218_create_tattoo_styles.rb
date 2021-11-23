class CreateTattooStyles < ActiveRecord::Migration[6.1]
  def change
    create_table :tattoo_styles do |t|
      t.references :tattoo
      t.references :style
      t.timestamps
    end
  end
end
