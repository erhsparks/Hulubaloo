# Hulubaloo

[Hulubaloo][stream] takes Hulu's video streaming to the next level with a social feature called 'Movie Nights.' Users can schedule a time with their friends to watch any video in the Hulubaloo library together, and comment as they watch in a group chat sidebar.

It is a full stack web application built using a Postgres database, a Ruby on Rails backend framework, and a JavaScript React frontend using React as its architecture. It is hosted on Heroku and can be found at [hulubaloo.stream][stream] or [hulubaloo.herokuapp.com][heroku].

Check out the features and development information below to get a feel for what this little web app can do!

[stream]: http://hulubaloo.stream
[heroku]: https://hulubaloo.herokuapp.com

![IMAGE OF SPLASH PAGE] (docs/snaps/main_splash_logged_out.png)

## Features and Production Notes

### User Sign Up and Authentication. Guest Demo account.

Authentication is handled in Rails with a session and a user controller and associated create routes (new user, new session for existing user) and a destroy session route (log out).

There is a Guest account for demonstration purposes to new visitors.

![IMAGE OF GUEST LOGIN] (docs/snaps/main_page_guest_login.png)

Logged in users may view videos and participate in movie nights.

![IMAGE OF DROPDOWN] (docs/snaps/main_dropdown_hover.png)

In future I may implement a watch list but for this project I was focused on adding Movie Nights, rather than just cloning existing Hulu functionality. That being said, our next category is lifted directly off the Hulu main page...

### Video Categories and Featured Videos

The Hulu main page!

![IMAGE OF FEATURED CATEGORIES] (docs/snaps/main_page_logged_out_scrolled.png)

Tiles of the first four (see Additional Features below for discussion of future 'top/most watched') videos in each category, with links in the category title and to the right of the tiles which take the user to the full category view.

![IMAGE OF HIGHLIGHTED CATEGORY] (docs/snaps/main_page_logged_out_scrolled_highlighted.png)

![IMAGE OF CATEGORIES PAGE] (docs/snaps/categories_view.png)

There is also a link to all categories in the header, reachable from anywhere on the site. The header also contains a link back to home on the Hulubaloo logo, as well as login/sign up buttons when logged out, or a username dropdown menu when logged in.

![IMAGE OF CATEGORIES HIGHLIGHTED] (docs/snaps/categories_header_hover.png)

![IMAGE OF LOGGED OUT] (docs/snaps/categories_view.png)

The main page also features a footer bar with some relevant contact info.

![IMAGE OF FOOTER] (docs/snaps/action_category_view_scrolled.png)

### Watching a Video!

Just like normal Hulu, users can watch any video they like in happy isolation and anonymity. No comment box, no facebook-like publishing of what you're watching, just sweet, sweet television. Videos are hosted on Vimeo and accessed using their basic API. They contain no copyright content, just videos of me doing trapeze.

![IMAGE OF VIDEO] (docs/snaps/video_in_progress.png)

Users may not access the videos when signed out, but they are allowed to visit the page so that they are encouraged to stay on the site after login/sign up. We've all felt the frustration of a site that redirects us to the homepage when logged out -- the user is not encouraged to stay and try to find the link again if they bother to sign in at all!

![IMAGE OF VIDEO ROADBLOCK] (docs/snaps/video_roadblock.png)

The site does, however, redirect to home on logout.

The video watch page will also have a button to create and host a movie night, but while the movie nights index and watch components are finished at the time of writing this (see next section), the form is not complete and so there is currently no button. It will be green and will pop up a modal with movie night creation options: a calendar dropdown, a time dropdown, a time zone dropdown, and a checkbox field of usernames for the participants. The time zone conversion and sorting of data between database tables is handled in the backend. Below is a small taste:

```ruby
// app/controllers/api/movie_nights_controller.rb
def create
  date = movie_night_params[:date].map &:to_i
  time = movie_night_params[:time].map &:to_i
  movie_night = MovieNight.new({
    host_id: current_user.id,
    video_id: movie_night_params[:video_id],
    date_and_time: DateTime.new(*date, *time)
  })

  if movie_night.save
    participants = movie_night_params.participant_names
    participants.map! { |name| User.find_by_username(name) }
    movie_night.participants |= participants

    render json: movie_night.formatted_for_collection
  else
    render json: movie_night.errors.full_messages, status: 422
  end
end

def movie_night_params
  params.require(:movie_night).permit(:video_id, date: [], time: [], participant_names: [])
end

// app/models/movie_night.#!/usr/bin/env ruby -wKU
def formatted_for_collection
  {
    self.id => {
      id: self.id,
      host: self.host.username,
      title: self.title,
      active: self.active,
      currency: self.currency,
      preview_image_url: self.video.preview_image_url
    }
  }
end
```

### Movie Nights

Users may view their movie nights by clicking 'My Movie Nights' under their username in the header. This link takes them to the Movie Night index.

![IMAGE OF MOVIE NIGHT INDEX] (docs/snaps/movie_nights_index_scrolled.png)

As they mouse over movie nights, the titles light up Hulu green to prompt them that they are links to the movie night. In future, I plan to implement an active/inactive feature, where links to upcoming movie nights are not live until a half hour before Movie Night start (to get the discussion going rather than just starting the video abruptly!).

![IMAGE OF MOVIE NIGHT] (docs/snaps/movie_night.png)

Which brings us to...

### Commenting on a Movie Night

Movie Nights look very similar to their solo-viewing counterparts, with an added sidebar with infinite scrolling comments. Top level comments are posted to the top of the stream, while their replies are listed chronologically.

![IMAGE OF COMMENTS] (docs/snaps/movie_night.png)

## To Infinity and Beyond! Further Ideas for Hulubaloo

Additional features to implement.


### Live Comments!

![IMAGE OF COMMENT MOUSEOVER] (docs/snaps/comment_mouseover.png)

You may notice that mousing over a comment highlights it link green. You may also have noticed that comment post time is displayed in time since movie night start. In future, I plan to tie the comment post time to the video timestamps, so that after the movie night has ended (`active: false`), clicking a comment will take you to that point in the video. This requires more access to Vimeo's video controls than their basic API allows, but their developer API will.

### Watchlist

Let users add videos to a watchlist. Fairly straightforward!

### Video search

Search database with a live dropdown search in the middle of the header, accessable across the site.

### Featured Category Infinite Scroll

Currently there are only a maximum of four videos fetched from the database in each category. Implement a `fetchNextFourVideos` method in the fronend.

### View Count to Order Videos by Popularity

Add a `num_times_viewed` column to the videos table and sort by it.

### TV shows

To shake up the front page layout :)

### Ability to Add Friends / User Search

So that users don't have to chose from a checklist of every user on the site (on a real site, this would be insane, impractical, and a privacy violation as movie nights currently do not have an `accept` feature, users are simply added by the Movie Night creator).


## Version Information

Hulubaloo is built using Ruby 2.3.1 and Rails 4, React 15.3.2, and Redux 3.6.0.

Additional version information can be found in the [Gemfile][Gemfile] for the backend and the [NPM package info][package] for the frontend. React .jsx files are bundled using [webpack][webpack].

[Gemfile]: Gemfile
[package]: package.json
[webpack]: webpack.config.js
