import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer t1ctmwJj69ZiGB8o8m_rgcAGOHuK_76WWldELsAH44F_KjHCilF7ROcYyJ6qi81HG2r3Q8MEHvPTPkpZ23aYX86YuP3SSbub6sNnKfDm2LaQ6oZmmyjzyV8FIYRfZHYx",
  },
});
