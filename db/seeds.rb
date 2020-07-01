# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

(1..4).each do |index|
  Product.create!(name: "name#{index}", count: index)
end

Analog.create!(product_m_id: 1, product_a_id: 2)
Analog.create!(product_m_id: 1, product_a_id: 3)
Analog.create!(product_m_id: 2, product_a_id: 3)
Analog.create!(product_m_id: 2, product_a_id: 4)