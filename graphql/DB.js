export const people=[
    {   
        id: "0",
        name : "nidoos",
        age: 20,
        gender: "female"
    },
    {
        id: "1",
        name : "SB",
        age: 20,
        gender: "female"
    },
    {
        id: "2",
        name : "HJ",
        age: 20,
        gender: "female"
    },
    {
        id: "3",
        name : "WW",
        age: 20,
        gender: "female"
    },
    {
        id: "4",
        name : "TJ",
        age: 20,
        gender: "female"
    },
    {
        id: "5",
        name : "SE",
        age: 20,
        gender: "female"
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0]
}