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
  validates :title, :description, :preview_image_url, presence: true
  validates :video_url, presence: true, uniqueness: true

  has_many :categorizings,
  primary_key: :id,
  foreign_key: :video_id,
  class_name: :VideoCategorizing,
  dependent: :destroy

  has_many :categories,
  through: :categorizings,
  source: :video_category

  has_many :movie_nights,
  primary_key: :id,
  foreign_key: :movie_id,
  class_name: :MovieNight,
  dependent: :destroy
end
