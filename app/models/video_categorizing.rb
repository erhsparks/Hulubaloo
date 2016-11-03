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
  validates :video_id, presence: true, uniqueness: { scope: :category_id }
  validates :category_id, presence: true

  belongs_to :video,
  primary_key: :id,
  foreign_key: :video_id,
  class_name: :Video

  belongs_to :video_category,
  primary_key: :id,
  foreign_key: :category_id,
  class_name: :VideoCategory
end
