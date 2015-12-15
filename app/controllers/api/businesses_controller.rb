class Api::BusinessesController < ApplicationController

  def index
    @businesses = Business.all();
  end

  def create
    business = Business.create!(business_params)
    render json: business
  end

  def show
    @business = Business.find(params[:id])
    render json: @business
  end

  def destroy
  end

  private

  def business_params
    params.require(:business).permit(:name, :category, :lat, :lng, :address,
                                     :hours, :delivery, :accept_cc, :image_id)
  end

end
