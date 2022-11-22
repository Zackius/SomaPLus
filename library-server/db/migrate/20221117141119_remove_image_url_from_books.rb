class RemoveImageUrlFromBooks < ActiveRecord::Migration[7.0]
  def change
    remove_column :books, :Image_url, :string
  end
end
