class Tattoo < ApplicationRecord
  has_many_attached :photos
  has_many :tattoo_styles, dependent: :destroy
  has_many :styles, through: :tattoo_styles

  validates_presence_of :name
end
