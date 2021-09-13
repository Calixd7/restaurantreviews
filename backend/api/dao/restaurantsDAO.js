let restaurants

export default class RestaurantsDAO {
    static async injectDB(conn) {
      if (restaurants) {
        return
      }
      try {
        restaurants = await conn.db(process.env.RESTREVIEWS_NS).collection("restaurants")
      } catch (e) {
        console.error(
          `Unable to establish a collection handle in restaurantsDAO: ${e}`,
        )
      }
    }
  
    static async getRestaurants({
      filters = null,
      page = 0,
      restaurantsPerPage = 20,
    } = {}) {
      let query
      if (filters) {
        if ("name" in filters) {
          query = { $text: { $search: filters["name"] } }
        } else if ("cuisine" in filters) {
          query = { "cuisine": { $eq: filters["cuisine"] } }
        } else if ("zipcode" in filters) {
          query = { "address.zipcode": { $eq: filters["zipcode"] } }
        }
      }
let cursor
try{
    
}
    }
}