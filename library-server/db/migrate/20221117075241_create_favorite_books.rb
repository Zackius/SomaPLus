class CreateFavoriteBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :favorite_books do |t|
      t.string :title
      t.string :author
      t.string :book_description

      t.timestamps
    end
  end
end
