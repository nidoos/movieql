// resolvers : 쿼리를 해결하는것

import { people, getById } from "./DB.js";

const resolvers ={
    Query: {
        people: () => people,
        // person: function(){
        //     return nidoos
        // }
        person: (_, {id}) => getById(id)
    }
};

export default resolvers;