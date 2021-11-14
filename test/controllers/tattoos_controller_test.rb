require "test_helper"

class TattoosControllerTest < ActionDispatch::IntegrationTest
  test "should get references" do
    get tattoos_references_url
    assert_response :success
  end
end
