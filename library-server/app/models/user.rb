class User < ApplicationRecord
    has_many :books
    has_many :favorite_books
end
