# == Schema Information
#
# Table name: videos
#
#  id                :integer          not null, primary key
#  title             :string           not null
#  description       :text             not null
#  video_url         :string           not null
#  preview_image_url :string           not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Video < ActiveRecord::Base
end
