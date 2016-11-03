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
  validates :name, presence: true, uniqueness: true

  has_many :categorizings,
  primary_key: :id,
  foreign_key: :category_id,
  class_name: :VideoCategorizing,
  dependent: :destroy

  has_many :videos,
  through: :categorizings,
  source: :video
end
