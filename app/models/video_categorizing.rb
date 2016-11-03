# == Schema Information
#
# Table name: video_categorizings
#
#  id          :integer          not null, primary key
#  video_id    :integer          not null
#  category_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class VideoCategorizing < ActiveRecord::Base
end
