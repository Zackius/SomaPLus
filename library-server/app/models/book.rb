class Book < ApplicationRecord
    belongs_to :users
    belongs_to :categories

    validates :title, presence: true
    validates :author, presence: true
    validates :book_description, presence: true
end
