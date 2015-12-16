class Api::BusinessesController < ApplicationController

  def index
    # @businesses = Business.all()
    # # p @businesses
    # p params
    # @businesses = @businesses.filter_all(bounds, params[:delivery], params[:accept_cc])
    # @businesses
    # p params[:delivery]
    @businesses = Business.filter_all(bounds, params[:delivery], params[:accept_cc])
    # if(bounds)
    #   businesses = Business.in_bounds(bounds)
    # end
    #
    # p params
    # businesses = Business.where(delivery: params[:delivery]).where(accept_cc: params[:accept_cc])
    # p businesses
    # @businesses = businesses
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

  def bounds
    params[:bounds]
  end

end
