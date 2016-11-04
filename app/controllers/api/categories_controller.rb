class Api::CategoriesController < ApplicationController
  def index
    @categories = VideoCategory.all
    render :index
  end

  def show
    @category = VideoCategory.find(params[:id])
    @videos = @category.videos
    render :show
  end
end
