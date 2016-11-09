# == Schema Information
#
# Table name: comments
#
#  id             :integer          not null, primary key
#  body           :text             not null
#  author_id      :integer          not null
#  movie_night_id :integer          not null
#  parent_id      :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Comment < ActiveRecord::Base
  validates :body, :author_id, :movie_night_id, presence: true

  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :User,
  inverse_of: :authored_comments

  belongs_to :movie_night,
  primary_key: :id,
  foreign_key: :movie_night_id,
  class_name: :MovieNight,
  inverse_of: :comments

  belongs_to :parent,
  primary_key: :id,
  foreign_key: :parent_id,
  class_name: :Comment

  has_many :children,
  primary_key: :id,
  foreign_key: :parent_id,
  class_name: :Comment
end
