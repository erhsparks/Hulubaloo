# API Endpoints

## HTML API

### Root

- `GET /` - React components will mount here

## JSON API

### Users

- `POST /api/users` - Sign up new user
- `GET /api/user/:id/showings/`

### Session

- `POST /api/session` - Sign in
- `DELETE /api/session` - Sign out

### Videos

- `GET /api/videos/` - Used with query by category
- `GET /api/videos/:id`
- Like real Hulu, users cannot add or alter videos, only watch them. Videos will be added in the backend as seed data.

### Showings

- `GET /api/showings/:id`
- `POST /api/showings/`
- `PATCH /api/showings/:id`
  - Host may edit showing info only until showing begins

### Comments

- `POST /api/comments/`
  - Comments may be posted to a video during a showing
  - After showing ends (active: false), no new top-level comments (parent_id: null) but can continue discussions in nested comments
- `GET /api/comments/:id`
- `DELETE /api/comments/:id`
  - Author may delete own comments
  - Showing host may delete any comment
