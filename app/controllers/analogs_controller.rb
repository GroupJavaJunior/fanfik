class AnalogsController < ApplicationController
  def index
    @product = Product.includes(:products).find(params[:product_id])
    render json: @product.products
  end
end
