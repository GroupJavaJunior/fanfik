class ProductsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: Product.order(:name)
  end

  def update
    @product = Product.find(params[:id])
    @product.update(count: params[:count])
    render json: @product
  end
end
