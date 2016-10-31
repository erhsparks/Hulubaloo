# Example of Redux state object

```js
{
  currentUser: {
    id: 1,
    username: "guest"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createMovieNight: {errors: []}
  },
  videos: {
    1: {
      title: "Escape from New York",
      description: "1997. New York City is a walled maximum security prison. Breaking out is impossible. Breaking in is insane.",
      category: "Action",
      video_url: "escape_from_new_york.mov",
      preview_image_url: "escape_from_new_york.png"
      }
    }
  },
  screenings: {
    1: {
      title: "Escape from New York December 31 11:15pm",
      host_id: 1,
      viewerIds: [1, 3, 6, 7],
      comments: {
        author_id: 1,
        comment_timestamp: 00:30,
        body: "So suspenseful!",
        childComments: {}
      }
    }
  }
}
```
