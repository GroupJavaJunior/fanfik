class CreateAnalogs < ActiveRecord::Migration[6.0]
  def change
    create_table :analogs do |t|
      t.references :product_m, null: false, foreign_key: {to_table: :products}
      t.references :product_a, null: false, foreign_key: {to_table: :products}

      t.timestamps
    end
  end
end
