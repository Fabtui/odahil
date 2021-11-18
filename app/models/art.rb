class Art < ApplicationRecord
  has_many_attached :photos

  validates_presence_of :name, :photos
end
