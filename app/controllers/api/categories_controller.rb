class Api::CategoriesController < ApplicationController
  def index
    @categories = VideoCategory.all
    render :index
  end

  def show
    @category = VideoCategory.find_by_name(params[:id])
    render :show
  end
end
