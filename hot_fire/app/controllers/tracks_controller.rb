class Tracks < ApplicationController
  def index
    @tracks = Track.all
  end

  def show
    @track = Track.find(params[:id])
  end

  def new
  end

  def create
  end

  def update
  end

  def destroy
  end

  private
  def track_params
    params.require(:track).permit(:song_title)
  end
end
