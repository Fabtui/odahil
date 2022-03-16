class PostsController < ApplicationController
  skip_before_action :authenticate_user!

  def new
    @post = Post.new
    if params[:like]
      unless Post.find_by_link(params[:link]) != nil
        @post.like = params[:like]
        @post.link = params[:link]
        image_url = params[:image].gsub('///', '&')
        @post.image = image_url
        require 'open-uri'
        open("./app/assets/#{params[:link]}.jpeg", 'wb') do |file|
          file << open(image_url).read
        end
        @post.save
      end
      raise
    end
  end

  private

  def post_params
    params.require(:post).permit(:like)
  end
end
