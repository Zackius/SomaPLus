class Category < ApplicationRecord
    has_many :books
    belongs_to :users

    validates :name, presence: true, uniqueness: true
end
