# == Schema Information
#
# Table name: movie_nights
#
#  id         :integer          not null, primary key
#  host_id    :integer          not null
#  video_id   :integer          not null
#  title      :string
#  date       :date             not null
#  time       :time             not null
#  active     :boolean          default(FALSE), not null
#  currency   :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class MovieNight < ActiveRecord::Base
  validates :host_id, :video_id, :date, :time, :active, presence: true
  after_initialize :set_title, :set_currency

  def

  def set_title
    self.title = "#{video_title} #{self.date} at #{self.time}"
  end

  def set_currency
    now = Time.now

    case self.time <=> now
    when -1, 0
      self.currency = 'past'
    when 1
      self.currency = 'upcoming'
    end
  end
end
