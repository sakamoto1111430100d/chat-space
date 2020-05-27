class Message < ApplicationRecord
  belongs_to :group
  belongs_to :user

  validates :cotent, presence: true, unless: :image?
end
