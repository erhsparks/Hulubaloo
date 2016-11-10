class Api::MovieNightsController < ApplicationController
  def index
    @movie_nights = MovieNight.all
    render :index
  end

  def show
    @movie_night = MovieNight.find(params[:id])
    render :show
  end

  def create
    @movie_night = MovieNight.new(movie_night_params)

    if @movie_night.save
      render :show
    else
      render json: @movie_night.errors.full_messages, status: 422
    end
  end

  private
  def movie_night_params
    params.require(:movie_night).allow(:host_id, :video_id, :date_and_time)
  end
end
