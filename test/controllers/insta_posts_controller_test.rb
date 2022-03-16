require "test_helper"

class InstaPostsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get insta_posts_index_url
    assert_response :success
  end

  test "should get new" do
    get insta_posts_new_url
    assert_response :success
  end

  test "should get create" do
    get insta_posts_create_url
    assert_response :success
  end
end
