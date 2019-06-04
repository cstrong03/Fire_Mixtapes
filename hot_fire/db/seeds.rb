# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
# <img src={music.album}/>
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(first_name: "Monica", username: "magic", email: "hey@fakemail.com")
user2 = User.create(first_name: "Lori", username: "vegan_goddess", email: "heyyou@fakemail.com")
user3 = User.create(first_name: "Fluffy", username: "cottonball", email: "tears@fakemail.com")
user4 = User.create(first_name: "Niecey", username: "barbie", email: "ratchet@fakemail.com")

track1 = Track.create(song_title: "Crazy in Love", artist: "Beyoncé", album: "Dangerously in Love")
track2 = Track.create(song_title: "Super Bass", artist: "Nicki Minaj", album: "Pink")
track3 = Track.create(song_title: "Never Be Like You", artist: "Flume ft Kai", album: "Skin")
track4 = Track.create(song_title: "Hotline Bling", artist: "Drake", album: "Views")
