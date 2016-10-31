# Hulubaloo

Live at [hulubaloo.stream][custom-domain] or [hulubaloo.herokuapp.com][heroku]

[Trello][trello]

[custom-domain]: http://www.hulubaloo.stream
[heroku]: https://hulubaloo.herokuapp.com
[trello]: https://trello.com/b/n9X3yAEd/hulubaloo

## Minimum Viable Product

Hulubaloo is a full stack web application which adds social features to Hulu's video streaming by integrating live commenting during video streaming sessions. It is built using Ruby on Rails and React/Redux.

Minimum viable product will include the following:

- [ ] Sign up, log in, log out, guest/demo login
- [ ] Production README
- [ ] Hosting on Heroku
- [ ] Videos: organized by category
- [ ] Movie Nights: group video screenings
- [ ] Commenting on Movie Nights, with nested comments
- [ ] Live Comments I: Top-level comments tied to video playback
  - On replay, comments and their children will reappear as playback reaches timestamp at which comment was left.

Bonus Features include:

- [ ] Live Comments II: Video playback tied to top-level comments
  - Clicking a top-level comment will jump video playback to point in video at which comment was left.

Each feature will be considered complete when its CSS styling feels like that of Hulu's, it includes plenty of seed data, and it can be seamlessly and intuitively navigated by an end user.

## Design Docs
* [Wireframes for Views][wireframes]
* [React Components][components]
* [API Endpoints][api-endpoints]
* [Database Schema][schema]
* [Example Redux State][sample-state]

[wireframes]: wireframes
[components]: component-hierarchy.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md
[sample-state]: sample-state.md

## Implementation Timeline

### Phase 1: Authentication: Sign up, Log in, Log out (1 days)

**Objective:** Visitors to site can create a new account, and then log in and out. Appropriate errors are displayed for invalid user input. Auth is handled by a Redux cycle which makes AJAX calls to the database after getting user input via a React form component.

### Phase 2: Videos (3 days)

**Objective:** Videos are displayed on the home page, organized in rows corresponding to the video's category. Clicking a video will take user to a watch page where they can view that video.

### Phase 3: Movie Nights (2 days)

**Objective:** Users may host screenings of videos, known as Movie Nights: new Movie Night form will include selection of video to watch, date and time to watch it, and users to add as viewers. View page will look like regular video view but with an additional comments container to the right of the video player. Host may edit the movie night details until screening begins.

### Phase 4: Commenting: top-level and nested (2 days)

**Objective:** Top-level comments will be active from five minutes before video start to five minutes after video end. New comment form will be above comments, and comments will display from most recent at the top to oldest at the bottom. Comments container will match video playback container in size, with a scroll feature to access older comments. Comment author may delete own comments, and Movie Night host may delete any comments.

Comments can be commented on! Nested comments will remain active after screening ends, to keep the discussion going after the show is over!

### Phase 5: Live Comments I: playback (2 days)

**Objective:** On rewatch, comments and their children reappear as playback progresses past the time at which the parent comment was originally left.

### Bonus Phases!

### Phase 6: Live Comments II: jump to time of comment (2 days)

**Objective:** Clicking a top-level (parent-less) comment jumps video playback to that comment's creation time, so you can relive the context of that comment as you join the discussion!
