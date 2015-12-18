class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.all
  end

  def create
    @review = Review.new(review_params)
    @review.author = current_user
    @review.author_id = current_user.id
    @review.save!
    render :show
  end

  def show
    @review = Review.find(params[:id])
  end

  def destroy
  end

  private

  def review_params
    params.require(:review).permit(:author_id, :business_id, :rating, :body, :created_at)
  end
end
