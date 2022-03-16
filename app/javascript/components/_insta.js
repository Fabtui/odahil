const insta = () => {
  var axios = require("axios").default;

  var options = {
    method: 'GET',
    url: 'https://instagram130.p.rapidapi.com/account-info',
    params: {username: 'odahil'},
    headers: {
      'x-rapidapi-host': 'instagram130.p.rapidapi.com',
      'x-rapidapi-key': 'adce2d9870msh273da1f8fe3288ap115af9jsna2e707922512'
    }
  };
  axios.request(options).then(function (response) {
    // console.log(response.data.edge_owner_to_timeline_media.edges);
    // console.log(response.data.edge_owner_to_timeline_media.edges[0].node.edge_liked_by.count);
    // console.log(response.data.edge_owner_to_timeline_media.edges[0].node.shortcode);
    // console.log(response.data.edge_owner_to_timeline_media.edges[0].node.display_url);
    const instaPost = { imageUrl: response.data.edge_owner_to_timeline_media.edges[0].node.display_url,
                        shortCode: response.data.edge_owner_to_timeline_media.edges[0].node.shortcode,
                        likeCount: response.data.edge_owner_to_timeline_media.edges[0].node.edge_liked_by.count
                      }
    console.log(instaPost);
  }).catch(function (error) {
    console.error(error);
  });
}

export { insta }
