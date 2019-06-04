class Playlist < ApplicationRecord
  has_many_and_belongs_to :musics
  belongs_to :user
end
