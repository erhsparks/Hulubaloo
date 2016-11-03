# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).

User.create(username: 'Guest', password: 'password');
User.create(username: 'Lizzi', password: 'asdfasdf');
User.create(username: 'a', password: 'asdfasdf');

action = VideoCategory.create(name: 'action')
adventure = VideoCategory.create(name: 'adventure')
comedy = VideoCategory.create(name: 'comedy')
animated = VideoCategory.create(name: 'animated')
scifi = VideoCategory.create(name: 'scifi')
robots = VideoCategory.create(name: 'robots')
horror = VideoCategory.create(name: 'horror')

t2 = Video.new(title: 'Terminator 2',
             description: 'Same Make. Same Model. New Mission.',
             video_url: 'a',
             preview_image_url: 'asdf')
t2.save
t2.categories.push(action, adventure, scifi, robots)

escape = Video.new(title: 'Escape from New York',
             description: '1997. New York City is a walled maximum security prison. Breaking out is impossible. Breaking in is insane.',
             video_url: 's',
             preview_image_url: 'asdf')
escape.save
escape.categories.push(action, scifi, comedy)

max = Video.new(title: 'Mad Max: Fury Road',
             description: 'What a lovely day.',
             video_url: 'd',
             preview_image_url: 'asdf')
max.save
max.categories.push(action, adventure)

thelma = Video.new(title: 'Thelma and Louise',
             description: 'asdf',
             video_url: 'f',
             preview_image_url: 'asdf')
thelma.save
thelma.categories.push(action, adventure)

clueless = Video.new(title: 'Clueless',
             description: 'WhatEVER.',
             video_url: 'aa',
             preview_image_url: 'asdf')
clueless.save
clueless.categories.push(comedy, adventure)

hot_fuzz = Video.new(title: 'Hot Fuzz',
             description: "They're bad boys. They're die hards. They're lethal weapons. They are...",
             video_url: 'ss',
             preview_image_url: 'asdf')
hot_fuzz.save
hot_fuzz.categories.push(action, adventure, comedy)

iron_giant = Video.new(title: 'The Iron Giant',
             description: 'It came from outer space!',
             video_url: 'dd',
             preview_image_url: 'asdf')
iron_giant.save
iron_giant.categories.push(animated, scifi, robots)

them = Video.new(title: 'Them!',
             description: 'A horror horde of crawl-and-crush giants clawing out of the earth from mile-deep catacombs!',
             video_url: 'ff',
             preview_image_url: 'asdf')
them.save
them.categories.push(action, scifi, horror)
