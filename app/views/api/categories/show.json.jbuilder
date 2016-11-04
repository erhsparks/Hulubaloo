json.set! @category.name do
  @videos.each do |video|
    json.set! video.id do
      json.extract! video, :id, :title, :preview_image_url
    end
  end
end
