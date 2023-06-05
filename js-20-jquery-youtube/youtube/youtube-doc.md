# Youtube helper library
## Get the Video ID from a Video URL

### Syntax:
```js
youtube.getIdFromUrl(videoUrlOrID);
```

Expects an argument (videoUrlOrID) that is either a youtube video URL or a video ID and returns back the video's ID.

### Example:
```js
var vid_id = youtube.getIdFromUrl('http://www.youtube.com/watch?v=epUk3T2Kfno');

// vid_id equals 'epUk3T2Kfno' (notice where the ID is in the original url)
```

## Generate a Thumbnail URL from a Video URL

### Syntax:
```js
youtube.generateThumbnailUrl(videoUrlOrID)
```
Expects an argument (videoUrlOrID) that is either a youtube URL or a ID and returns back the URL of the thumbnail for that video.

### Example:
```js
var vid_thumbnail = youtube.generateThumbnailUrl('http://www.youtube.com/watch?v=epUk3T2Kfno');

// vid_thumbnail equals 'http://i3.ytimg.com/vi/epUk3T2Kfno/default.jpg' (notice how the video's ID is inserted in the middle of the image url)
```

## Generate the URL to Watch a Video from the Video ID

### Syntax:
```js
youtube.generateWatchUrl(videoUrlOrID)
```

Expects an argument (videoUrlOrID) that is either a youtube URL or a ID and returns back the URL for that video.

### Example:
```js
var vid_watch = youtube.generateWatchUrl('epUk3T2Kfno');

// vid_watch equals 'https://www.youtube.com/watch?v=epUk3T2Kfno' (notice where the video ID is in the url)
```

## Generate the URL to Embed a Video from the Video ID


### Syntax:
```js
youtube.generateEmbedUrl(videoUrlOrID)
```

Expects an argument (videoUrlOrID) that is either a youtube URL or a ID and returns back the embed URL for that video.

### Example:
```js
var vid_embed = youtube.generateEmbedUrl('http://www.youtube.com/watch?v=epUk3T2Kfno');

// vid_embed equals 'http://www.youtube.com/embed/epUk3T2Kfno' (notice where the video ID is in the url)
```