class UsersController < ApplicationController
     def index
users = User.all
render json: users
     end
     def create
        user = User.create!(user_params)
        render json: user,  status: :created
     end

     def show
        user = find_user
        render json: user, status: :ok
     end
     
     def update 
user = find_user
render json: user.update!(update_user_params), status: :ok
     end 
      private 

      def user_params
params.permit(:first_name, :second_name, :username,  :email, :image_url, :password, :password_confirmation)
      end 
      def find_user
User.find(params[:id])
      end

end
