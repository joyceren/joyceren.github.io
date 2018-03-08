const sources = {
  "ABC News": false,
  'Al Jazeera English': false,
  'Ars Technica': false,
  'Associated Press': false,
  'Axios': false,
  'BBC News': false,
  'Bloomberg': false,
  'Business Insider': false,
  'Breitbart News': false,
  Buzzfeed: false,
  'CBS News': false,
  CNBC: false,
  CNN: false
}

const profiles = {
  'Top Headlines': {
    sources: sources,
    filterTerms: [],
    'sentiment': ''
  },
  'Happy News': {
    sources: sources,
    filterTerms: [],
    'sentiment': 1
  },
  'Trump Mute':{
    sources: sources,
    filterTerms: ['Trump', 'Donald Trump'],
    'sentiment': ''
  }
}
