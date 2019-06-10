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

track1 = Track.create(song_title: "Crazy in Love", artist: "Beyoncé", album: "https://i.imgur.com/kehy4td.jpg", user_id: 2)
track2 = Track.create(song_title: "Super Bass", artist: "Nicki Minaj", album: "https://i.imgur.com/RDYq99v.jpg", user_id: 4)
track3 = Track.create(song_title: "Never Be Like You", artist: "Flume ft Kai", album: "https://i.imgur.com/HofiIG2.jpg", user_id: 3)
track4 = Track.create(song_title: "Hotline Bling", artist: "Drake", album: "https://i.imgur.com/hwVwSej.jpg", user_id: 3)
track5 = Track.create(song_title: "Old Town Road", artist: "Lil Nas X ft. Billy Ray Cyrus", album: "https://i.imgur.com/zWNYHXd.jpg", user_id: 4)
track6 = Track.create(song_title: "7 Rings", artist: "Ariana Grande", album: "https://i.imgur.com/vuqs90x.jpg", user_id: 1)
track7 = Track.create(song_title: "Fall", artist: "Davido", album: "https://i.imgur.com/cKc3oCS.jpg", user_id: 1)
track8 = Track.create(song_title: "Nails, Hair, Hip, Heeks", artist: "Todrick Hall", album: "https://i.imgur.com/QYv1kfI.jpg", user_id: 2)
