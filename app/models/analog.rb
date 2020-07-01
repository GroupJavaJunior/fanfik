class Analog < ApplicationRecord
  belongs_to :product_a, foreign_key: :product_a_id, class_name: :Product
  belongs_to :product_m, foreign_key: :product_m_id, class_name: :Product
end
