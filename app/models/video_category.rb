# == Schema Information
#
# Table name: video_categories
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class VideoCategory < ActiveRecord::Base
end
