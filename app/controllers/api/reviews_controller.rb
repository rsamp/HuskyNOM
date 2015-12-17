class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.all
  end

  def create
    review = Review.create!(review_params)
    render json: review
  end

  def show
    review = Review.find(params[:id])
    render json: review
  end

  def destroy
  end

  private

  def review_params
    params.require(:review).permit(:author_id, :business_id, :rating, :body, :created_at)
  end
end
