class Tattoo < ApplicationRecord
  has_many_attached :photos

  validates_presence_of :name
end
