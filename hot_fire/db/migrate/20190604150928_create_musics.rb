class CreateMusics < ActiveRecord::Migration[5.2]
  def change
    create_table :musics do |t|
      t.string :title
      t.string :artist
      t.string :album
      t.string :album_release_date

      t.timestamps
    end
  end
end
