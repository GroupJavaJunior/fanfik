class Product < ApplicationRecord
  has_many :analogs, foreign_key: :product_m_id
  has_many :products, through: :analogs, source: :product_a
end
