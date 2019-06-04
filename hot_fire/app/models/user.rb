class User < ApplicationRecord
  has_many :musics
  has_many :playlists
end
