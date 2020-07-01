class AnalogsController < ApplicationController
  def index
    @product = Product.find(params[:product_id])
    render json: @product.products
  end
end
