// resolvers : 쿼리를 해결하는것

const nidoos={
    name : "nidoos",
    age: 20,
    gender: "female"

}

const resolvers ={
    Query: {
        person: () => nidoos
        // person: function(){
        //     return nidoos
        // }
    }
}

export default resolvers;