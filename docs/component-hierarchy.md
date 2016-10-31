# Component Hierarchy

**SessionFormContainer**
 - SessionForm

**AppContainer**
 - Header
 - Renders, depending on route:
  - HomeContainer
  - VideoContainer
  - MovieNightContainer
 - Footer

**HomeContainer**
 - JoinHulubalooContainer if logged out
 - HighlightedVideosSplash
 - Renders CategoriesContainer

**JoinHulubalooContainer**
 - JoinHulubalooDetail
 - GuestDemoButton
 - SignUpButton
  - Renders SessionFormContainer

**CategoriesContainer**
 - CategoryIndex
  - CategoryItem

**VideoContainer**
 - VideoDetail
 - NewMovieNightButton
  - Renders MovieNightFormContainer

**MovieNightFormContainer**
 - MovieNightForm

**MovieNightContainer**
 - VideoDetail
 - Renders CommentsContainer

**CommentsContainer**
 - CommentForm
 - CommentDetail
  - Renders NestedCommentsContainer

**NestedCommentsContainer**
 - CommentDetail
 - CommentForm

**Search** -- dropdown in header, time permitting

# Routes

Path                     | Component
-------------------------|----------------------------
 "/signup"               | "SessionFormContainer"
 "/login"                | "SessionFormContainer"
 "/"                     | "HomeContainer"
 "/watch/:videoId"       | "VideoContainer"
 "/new-movie-night"      | "MovieNightFormContainer"
 "/movie-night/:videoId" | "MovieNightContainer"
