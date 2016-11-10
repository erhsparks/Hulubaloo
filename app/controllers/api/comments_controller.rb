class Api::CommentsController < ApplicationController
  def index
    current_movie_night =  MovieNight.find(params[:movie_night_id])
    comments = current_movie_night.comments_by_parent
    render json: comments
  end

  def show
    comment = Comment.find(params[:id])
    render json: comment.format_details
  end

  def create
    comment = current_user.authored_comments.new(comment_params)
    comments_movie_night = comment.movie_night

    if comment.save
      render json: comment.format_details
    else
      render json: comment.errors.full_messages, status: 422
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :movie_night_id, :parent_id)
  end
end
