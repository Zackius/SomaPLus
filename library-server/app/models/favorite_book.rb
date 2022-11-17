class FavoriteBook < ApplicationRecord
    belongs_to :user

    validates :title, presence: true
    validates :author, presence: true
    validates :book_description, presence: true
end
