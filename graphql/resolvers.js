// resolvers : 쿼리를 해결하는것

import { getMovies, getById, addMovie } from "./DB.js";

const resolvers ={
    Query: {
        movies: () => getMovies(),
        movie: (_, {id}) => getById(id)
    },
    Mutation: {
        addMovie: (_, {name, score}) => addMovie(name, score)
    }
};

export default resolvers;