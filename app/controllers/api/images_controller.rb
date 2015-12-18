class Api::ImagesController < ApplicationController
  def index
    @images = Image.all
  end

  def create
    @image = Image.new(image_params)
    @image.save!
    render :show
  end

  def show
    @image = Image.find(params[:id])
  end

  def destroy
  end

  private

  def image_params
    params.require(:image).permit(:cloudinary_id, :business_id, :main)
  end
end
