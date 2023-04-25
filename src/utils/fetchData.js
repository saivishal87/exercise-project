export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': '8ef5a1aa86mshfdf1a817ae376e1p12f2f0jsnce85cb59f761',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '8ef5a1aa86mshfdf1a817ae376e1p12f2f0jsnce85cb59f761',
  },
};

export const fetchData= async (url,options) => {
  
  const response = await fetch(url,options)
  
  const data = await response.json();
  console.log(data)
  return data;
};
