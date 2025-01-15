const movies = [
  {
    title: "The Adventure Begins",
    genre: "Adventure",
    releaseYear: 2020,
    ratings: [4, 5, 4, 3, 5],
    streamingAvailable: true,
  },
  {
    title: "Midnight Mystery",
    genre: "Thriller",
    releaseYear: 2019,
    ratings: [3, 4],
    streamingAvailable: true,
  },
  {
    title: "Comedy Hour",
    genre: "Comedy",
    releaseYear: 2021,
    ratings: [5, 5, 4, 4, 3],
    streamingAvailable: false,
  },
  {
    title: "Space Wars",
    genre: "Sci-Fi",
    releaseYear: 2020,
    ratings: [4, 4, 5, 3],
    streamingAvailable: true,
  },
  {
    title: "Love Story",
    genre: "Romance",
    releaseYear: 2021,
    ratings: [3],
    streamingAvailable: true,
  },
];

const available = movies.filter(
  (movie) => movie.streamingAvailable === true && movie.ratings.length >= 3
);

const ratings = available.map((movie) => {
  const average =
    movie.ratings.reduce((sum, rating) => sum + rating, 0) /
    movie.ratings.length;

  return {
    title: movie.title,
    average_rating: Number(average.toFixed(1)),
    numberOfRatings: movie.ratings.length,
  };
});

const sortedMovies = ratings.sort(
  (a, b) => b.average_rating - a.average_rating
);

console.log(sortedMovies);
