# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).

guest = User.create(username: 'Guest', password: 'password');
me = User.create(username: 'Lizzi', password: 'asdfasdf');
asdf = User.create(username: 'asdf', password: 'asdfasdf');

action = VideoCategory.create(name: 'action')
adventure = VideoCategory.create(name: 'adventure')
comedy = VideoCategory.create(name: 'comedy')
animated = VideoCategory.create(name: 'animated')
scifi = VideoCategory.create(name: 'scifi')
robots = VideoCategory.create(name: 'robots')
horror = VideoCategory.create(name: 'horror')
romance = VideoCategory.create(name: 'romance')


one_url_to_rule_them_all = '//player.vimeo.com/video/190629446?autoplay=1&badge=0&byline=0&color=66AA33&portrait=0&title=0'

t2 = Video.create(title: 'Terminator 2',
             description: 'Same Make. Same Model. New Mission.',
             video_url: one_url_to_rule_them_all,
             preview_image_url: 'https://res.cloudinary.com/erhsparks/image/upload/v1478295420/terminator2_cbinaz.jpg')
t2.categories.push(action, scifi, robots)

escape = Video.create(title: 'Escape from New York',
             description: '1997. New York City is a walled maximum security prison. Breaking out is impossible. Breaking in is insane.',
             video_url: one_url_to_rule_them_all,
             preview_image_url: 'http://res.cloudinary.com/erhsparks/image/upload/v1478295418/escape_from_ny_oy0cfh.jpg')
escape.categories.push(action, scifi, comedy)

max = Video.create(title: 'Mad Max: Fury Road',
             description: 'What a lovely day.',
             video_url: one_url_to_rule_them_all,
             preview_image_url: 'https://res.cloudinary.com/erhsparks/image/upload/v1478295419/max_cxnhhu.jpg')
max.categories.push(action, adventure)

thelma = Video.create(title: 'Thelma and Louise',
             description: 'asdf',
             video_url: one_url_to_rule_them_all,
             preview_image_url: 'https://res.cloudinary.com/erhsparks/image/upload/v1478295419/thelma_louise_pubmpj.jpg')
thelma.categories.push(action, adventure, romance)

clueless = Video.create(title: 'Clueless',
             description: 'WhatEVER.',
             video_url: one_url_to_rule_them_all,
             preview_image_url: 'https://res.cloudinary.com/erhsparks/image/upload/v1478295418/clueless_bfehko.jpg')
clueless.categories.push(comedy, adventure, romance)

hot_fuzz = Video.create(title: 'Hot Fuzz',
             description: "They're bad boys. They're die hards. They're lethal weapons. They are...",
             video_url: one_url_to_rule_them_all,
             preview_image_url: 'https://res.cloudinary.com/erhsparks/image/upload/v1478295418/hot_fuzz_cpmfz8.jpg')
hot_fuzz.categories.push(action, adventure, comedy)

iron_giant = Video.create(title: 'The Iron Giant',
             description: 'It came from outer space!',
             video_url: one_url_to_rule_them_all,
             preview_image_url: 'https://res.cloudinary.com/erhsparks/image/upload/v1478295418/iron_giant_nr8gqb.jpg')
iron_giant.categories.push(animated, scifi, robots)

them = Video.create(title: 'Them!',
             description: 'A horror horde of crawl-and-crush giants clawing out of the earth from mile-deep catacombs!',
             video_url: one_url_to_rule_them_all,
             preview_image_url: 'https://res.cloudinary.com/erhsparks/image/upload/v1478295419/them_obv3h6.jpg')
them.categories.push(action, scifi, horror)

mn1_start = DateTime.new(2016, 11, 11, 13, 0, 0, '-8')
mn1 = MovieNight.create(host_id: 1, video_id: 1, date_and_time: mn1_start)
mn1.participants << me << asdf

mn2 = MovieNight.create(host_id: 2, video_id: 5, date_and_time: DateTime.new(2016, 11, 15, 14, 45, 0, '-8'))
mn2.participants << guest << asdf

mn3 = MovieNight.create(host_id: 1, video_id: 4, date_and_time: DateTime.new(2016, 11, 26, 19, 45, 0, '-8'))
mn3.participants << me << asdf

c1 = guest.authored_comments.create(movie_night_id: mn1.id, body: "Can't wait for the movie to start!", created_at: mn1_start + 5.seconds)
c2 = guest.authored_comments.create(movie_night_id: mn1.id, body: 'wow!', created_at: mn1_start + 65.seconds)
c3 = me.authored_comments.create(movie_night_id: mn1.id, body: 'I know, right?!', parent_id: c2.id, created_at: c2.created_at + 4.seconds )
c4 = me.authored_comments.create(movie_night_id: mn1.id, body: 'love this movie', created_at: mn1_start + 191.seconds)
c5 = asdf.authored_comments.create(movie_night_id: mn1.id, body: 'so exciting!', created_at: mn1_start + 231.seconds)
