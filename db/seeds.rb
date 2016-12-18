# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).

guest = User.create(username: 'Guest', password: 'password');
me = User.create(username: 'Lizzi', password: 'asdfasdf');
u1 = User.create(username: 'Mr Internet', password: 'asdfasdf');

categories = [
  'action',
  'adventure',
  'romance',
  'scifi',
  'comedy',
  'robots',
  'horror',
  'animated'
]

categories.each { |category| VideoCategory.create(name: category) }

videos = [
  191222620,
  191222266,
  191222316,
  191222863,
  191222292,
  191222410,
  191222761,
  191222485,
  191222367,
  191222799,
  191222996,
  191222671,
  191222630,
  191222503
]
one_url_to_rule_them_all = '//player.vimeo.com/video/'
url_options = '?autoplay=1&badge=0&byline=0&color=66AA33&portrait=0&title=0'

movies = {
  'Terminator 2' => {
    description: 'Same Make. Same Model. New Mission.',
    preview_image_url: 'https://res.cloudinary.com/erhsparks/image/upload/v1478295420/terminator2_cbinaz.jpg',
    categories: ['action', 'scifi', 'robots']
  },
  'Escape from New York' => {
    description: '1997. New York City is a walled maximum security prison. Breaking out is impossible. Breaking in is insane.',
    preview_image_url: 'http://res.cloudinary.com/erhsparks/image/upload/v1478295418/escape_from_ny_oy0cfh.jpg',
    categories: ['action', 'scifi', 'comedy']
  },
  'Mad Max: Fury Road' => {
    description: 'What a lovely day.',
    preview_image_url: 'https://res.cloudinary.com/erhsparks/image/upload/v1478295419/max_cxnhhu.jpg',
    categories: ['action', 'adventure']
  },
  'Thelma and Louise' => {
    description: 'Someone told them to get a life. So they did.',
    preview_image_url: 'https://res.cloudinary.com/erhsparks/image/upload/v1478295419/thelma_louise_pubmpj.jpg',
    categories: ['action', 'adventure', 'romance']
  },
  'Clueless' => {
    description: 'WhatEVER.',
    preview_image_url: 'https://res.cloudinary.com/erhsparks/image/upload/v1478295418/clueless_bfehko.jpg',
    categories: ['comedy', 'adventure', 'romance']
  },
  'Hot Fuzz' => {
    description: "They're bad boys. They're die hards. They're lethal weapons. They are...",
    preview_image_url: 'https://res.cloudinary.com/erhsparks/image/upload/v1478295418/hot_fuzz_cpmfz8.jpg',
    categories: ['action', 'adventure', 'comedy']
  },
  'The Iron Giant' => {
    description: 'It came from outer space!',
    preview_image_url: 'https://res.cloudinary.com/erhsparks/image/upload/v1478295418/iron_giant_nr8gqb.jpg',
    categories: ['animated', 'scifi', 'robots']
  },
  'Them!' => {
    description: 'A horror horde of crawl-and-crush giants clawing out of the earth from mile-deep catacombs!',
    preview_image_url: 'https://res.cloudinary.com/erhsparks/image/upload/v1478295419/them_obv3h6.jpg',
    categories: ['action', 'scifi', 'horror']
  },
  'Barbarella' => {
    description: 'Only the greatest movie ever made.',
    preview_image_url: 'http://res.cloudinary.com/erhsparks/image/upload/v1478295418/barbarella_rxvavw.jpg',
    categories: ['scifi', 'adventure', 'romance']
  },
  'This Island Earth' => {
    description: 'The supreme excitement of our time!',
    preview_image_url: 'http://res.cloudinary.com/erhsparks/image/upload/v1478295418/island_earth_shubnp.jpg',
    categories: ['scifi', 'horror']
  },
  'Forbidden Planet' => {
    description: 'Amazing!',
    preview_image_url: 'http://res.cloudinary.com/erhsparks/image/upload/v1478295418/forbidden_planet_o0uvhz.jpg',
    categories: ['robots', 'scifi', 'horror']
  },
  'Predator' => {
    description: "I ain't got time to bleed.",
    preview_image_url: 'http://res.cloudinary.com/erhsparks/image/upload/v1482096933/predator_zdin41.jpg',
    categories: ['scifi', 'action']
  },
  'Inception' => {
    description: 'BRRRRRMMMMMMMMMMMM',
    preview_image_url: 'http://res.cloudinary.com/erhsparks/image/upload/v1482096933/inception_doovd6.jpg',
    categories: ['scifi', 'action']
  },
  'Die Hard' => {
    description: '40 stories of sheer adventure!',
    preview_image_url: 'http://res.cloudinary.com/erhsparks/image/upload/v1482096933/die_hard_bzyfoy.jpg',
    categories: ['action', 'romance']
  },
  'The Snowman' => {
    description: 'After an English boy makes a snowman on Christmas Eve, it comes to life to take him on an adventure to the North Pole to meet Santa Claus.',
    preview_image_url: 'http://res.cloudinary.com/erhsparks/image/upload/v1482097206/The_Snowman_poster_uamfp2.jpg',
    categories: ['animated', 'adventure']
  }
}

movies.each do |title, info|
  url = one_url_to_rule_them_all + videos.sample.to_s + url_options

  movie = Video.create(
    title: title,
    description: info[:description],
    preview_image_url: info[:preview_image_url],
    video_url: url
  )

  info[:categories].each do |category|
    category = VideoCategory.find_by_name(category)
    movie.categories.push(category)
  end
end

mn1_start = DateTime.new(2016, 11, 11, 13, 0, 0, '-8')
mn1 = MovieNight.create(host_id: 1, video_id: 1, date_and_time: mn1_start)
mn1.participants << me << u1

mn2 = MovieNight.create(host_id: 2, video_id: 5, date_and_time: DateTime.new(2016, 12, 31, 18, 45, 0, '-8'))
mn2.participants << guest << u1

mn3 = MovieNight.create(host_id: 1, video_id: 4, date_and_time: DateTime.new(2017, 01, 26, 14, 45, 0, '-8'))
mn3.participants << me << u1

c1 = guest.authored_comments.create(movie_night_id: mn1.id, body: "Can't wait for the movie to start!", created_at: mn1_start + 5.seconds)
c2 = guest.authored_comments.create(movie_night_id: mn1.id, body: 'wow!', created_at: mn1_start + 65.seconds)
c3 = me.authored_comments.create(movie_night_id: mn1.id, body: 'I know, right?!', parent_id: c2.id, created_at: c2.created_at + 4.seconds )
c4 = me.authored_comments.create(movie_night_id: mn1.id, body: 'love this movie', created_at: mn1_start + 191.seconds)
c5 = u1.authored_comments.create(movie_night_id: mn1.id, body: 'so exciting!', created_at: mn1_start + 231.seconds)
