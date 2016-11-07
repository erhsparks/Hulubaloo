@categories.each do |category|
  videos = category.videos.limit(4)
  json.set! category.id do
    json.extract! category, :id, :name
    json.videos(videos) do |video|
      json.extract! video, :id, :title, :preview_image_url
    end
  end
end
