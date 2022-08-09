require("dotenv").config();

// Init Ghost API
const api =   {
  posts: {
  browse: () => { return [] },
  read: () => {return []}
},
authors: {
  browse: () => {return []},
  read: () => {return []}
},
tags: {
  browse: () => {return []},
  read: () => {return []}
},
pages: {
  browse: () => {return []},
  read: () => {return []}
},
settings: {
  browse: () => {return []}
}
}

// Get all site information
module.exports = async function() {
  const siteData = await api.settings
    .browse({
      include: "icon,url"
    })
    .catch(err => {
      console.error(err);
    });

  if (process.env.SITE_URL) siteData.url = process.env.SITE_URL;

  return siteData;
};
