const apiKey = 'awlUBh0KQo8otRxB2TLtSJ1UKgjSKCEdHeIT6GAikKelZypAIdmZdbilqQ65Z7zQhfY4KwmQR9Qy9RCvQOM2Eswvn52DOW-XxXrsPRGrBkH88hvnDnCwfTTd9dpuXHYx';

const Yelp = {
  searchYelp(term,location,sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        // This Authorization ojbect, is a form of identification when we make a request to the Yelp API.
        Authorization: `Bearer ${apiKey}`,
      },
    }).then((response) => {
      return response.json();
    }).then((jsonResponse) => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(((business) => {
          console.log(business);
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            categories: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          };
        }));
      }
    })
  }
};

export default Yelp;