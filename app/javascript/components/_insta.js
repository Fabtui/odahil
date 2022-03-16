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
    let instaPosts = []
    // console.log(response.data.edge_owner_to_timeline_media.edges);
    // console.log(response.data.edge_owner_to_timeline_media.edges[0].node.edge_liked_by.count);
    // console.log(response.data.edge_owner_to_timeline_media.edges[0].node.shortcode);
    // console.log(response.data.edge_owner_to_timeline_media.edges[0].node.display_url);
    const instaPost1 = { imageUrl: response.data.edge_owner_to_timeline_media.edges[0].node.display_url,
                        shortCode: response.data.edge_owner_to_timeline_media.edges[0].node.shortcode,
                        likeCount: response.data.edge_owner_to_timeline_media.edges[0].node.edge_liked_by.count
                      }
    instaPosts.push(instaPost1)
    const instaPost2 = { imageUrl: response.data.edge_owner_to_timeline_media.edges[1].node.display_url,
                    shortCode: response.data.edge_owner_to_timeline_media.edges[1].node.shortcode,
                    likeCount: response.data.edge_owner_to_timeline_media.edges[1].node.edge_liked_by.count
                  }
    instaPosts.push(instaPost2)
    const instaPost3 = { imageUrl: response.data.edge_owner_to_timeline_media.edges[2].node.display_url,
                    shortCode: response.data.edge_owner_to_timeline_media.edges[2].node.shortcode,
                    likeCount: response.data.edge_owner_to_timeline_media.edges[2].node.edge_liked_by.count
                  }
    instaPosts.push(instaPost3)
    // const instaDiv = document.querySelector('#insta')
    // instaDiv.innerHTML = `<a href="https://www.instagram.com/p/${instaPost.shortCode}/" target="_blank">
    // <img src=${instaPost.imageUrl}/>
    // <p>${instaPost.likeCount}</p>
    // </a>`
    instaPosts.forEach(instaPost => {
      const mutatedImageUrl = instaPost.imageUrl.replaceAll('&', 'zzzzz')
      const url = `/posts/new/?like=${instaPost.likeCount}&link=${instaPost.shortCode}&image=${mutatedImageUrl}`
      fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'text/plain',
        },
      })
      }).catch(function (error) {
        console.error(error);
      });
    });
}

export { insta }
