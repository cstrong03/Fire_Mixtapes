class CreatePlaylists < ActiveRecord::Migration[5.2]
  def change
    create_table :playlists do |t|
      t.string :playlist_title
      t.string :title
      t.string :artist
      t.string :album
      t.string :album_release_date

      t.timestamps
    end
  end
end
