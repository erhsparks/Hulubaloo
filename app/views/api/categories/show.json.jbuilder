json.set! @category.id do
  json.extract! @category, :id, :name
  json.set! 'videos' do
    @videos.each do |video|
      json.set! video.id do
        json.extract! video, :id, :title, :preview_image_url
      end
    end
  end
end
