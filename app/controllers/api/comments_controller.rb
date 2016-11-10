class Api::CommentsController < ApplicationController
  def index
    current_movie_night =  MovieNight.find(params[:movie_night_id])
    @comments = current_movie_night.comments_by_parent
    render :index # render json: @comments.to_json
  end

  def show
    @comment = Comment.find(params[:id])
    render :show
  end

  def create
    @comment = current_user.comments.new(comment_params)

    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :movie_night_id, :parent_id)
  end
end
