class Api::MovieNightsController < ApplicationController
  def index
    movie_nights = current_user.viewed_movie_nights
    render json: format_collection(movie_nights)
  end

  def show
    movie_night = MovieNight.find(params[:id])
    if current_user.viewed_movie_nights.include?(movie_night)
      render json: movie_night.formatted
    else
      render json: 'You are not a part of this movie night'
    end
  end

  def create
    date = movie_night_params[:date].map &:to_i
    time = movie_night_params[:time].map &:to_i
    movie_night = MovieNight.new({
      host_id: current_user.id,
      video_id: movie_night_params[:video_id],
      date_and_time: DateTime.new(*date, *time)
    })

    if movie_night.save
      render json: movie_night.formatted
    else
      render json: movie_night.errors.full_messages, status: 422
    end
  end

  private
  def format_collection(movie_nights)
    formatted_collection = {}
    movie_nights.each do |movie_night|
      movie_night_details = movie_night.formatted
      formatted_collection.merge!(movie_night_details)
    end

    formatted_collection
  end

  def movie_night_params
    params.require(:movie_night).permit(:video_id, date: [], time: [])
  end
end
