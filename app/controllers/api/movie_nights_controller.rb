class Api::MovieNightsController < ApplicationController
  def index
    movie_nights = current_user.viewed_movie_nights
    render json: formatted_movie_nights(movie_nights)
  end

  def show
    movie_night = MovieNight.find(params[:id])
    if current_user.viewed_movie_nights.include?(movie_night)
      render json: formatted_movie_night(movie_night)
    else
      render json: 'You are not a part of this movie night'
    end
  end

  def create
    date = movie_night_params[:date].map &:to_i
    time = movie_night_params[:time].map &:to_i
    debugger
    movie_night = MovieNight.new({
      host_id: current_user.id,
      video_id: movie_night_params[:video_id],
      date_and_time: DateTime.new(*date, *time)
    })

    if movie_night.save
      render json: formatted_movie_night(movie_night)
    else
      render json: movie_night.errors.full_messages, status: 422
    end
  end

  private
  def formatted_movie_nights(movie_nights)
    movie_night_object = {}
    movie_nights.each do |movie_night|
      movie_night_details = formatted_movie_night(movie_night)
      movie_night_object.merge!(movie_night_details)
    end

    movie_night_object
  end

  def formatted_movie_night(movie_night)
    {
      movie_night.id => {
        host: movie_night.host.username,
        title: movie_night.title,
        active: movie_night.active,
        currency: movie_night.active,
        video_id: movie_night.video_id
      }
    }
  end

  def movie_night_params
    params.require(:movie_night).permit(:video_id, date: [], time: [])
  end
end
