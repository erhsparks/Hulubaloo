json.extract! @category, :id, :name
json.videos(@category.videos) do |video|
    json.extract! video, :id, :title, :preview_image_url
  end
