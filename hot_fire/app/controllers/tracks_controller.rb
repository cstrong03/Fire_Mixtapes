class TracksController < ApplicationController
  before_action :set_track, only: [:show, :update, :destroy]

  def index
    @tracks = Track.all
    render json: @tracks, status: :ok
  end

  def show
    begin
      render json: @track, status: :ok
    rescue ActiveRecord::RecordNotFound
      render json: { message: "No song matches that search"}, status: :not_found
    rescue Exception
      render json: { message: "there was some other error"}, status: :internal_server_error
    end
  end

  def create
    @track = Track.new(track_params)
    if @track.save
      render json: @track, status: :created
    else
      render json: { errors: @track.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @track.update(track_params)
      render json: @track, status: :ok
    else
      render json: {errors: @track.errors}, status: :unprocessable_entity
    end
  end

  def destroy
    @track.destroy
    head :no_content
  end


  private

  def set_track
    @track = Track.find(params[:id])
  end

  def track_params
    params.require(:track).permit(:song_title, :artist, :album, :user_id)
  end
end
