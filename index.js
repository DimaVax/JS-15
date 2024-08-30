
// const people = [
//     {
//       name: "Artem",
//       friends: ["Maks", "Vania", "Kiril"],
//       balance: 340,
//       skills: ["programming"],
//     },
//     {
//       name: "Vania",
//       friends: ["Dima", "Artem"],
//       balance: 560,
//       skills: ["drawing"],
//     },
//     {
  
//       name: "Taras",
//       friends: ["Maks", "V'yacheslav", "Kiril", "Artem"],
//       balance: 210,
//       skills: ["swimming"],
//     },
//   ];
const arrayOfUsers = [
    {
        name: 'Dima',
        eyeColor: 'Brown',
        gender: 'Male',
        isActive: true,
        email: 'dima.krytoi@gmail.com',
        age: 12,
        friends: ['Milan', 'Maxim', 'Artur', 'Ira', 'Vlad'],
        balance: 550,
        skils: ['Coding', 'Painting'],
    },
    {
        name: 'Milan',
        eyeColor: 'Green',
        gender: 'Male',
        isActive: false,
        email: 'milan.krytoi@gmail.com',
        age: 11,
        friends: ['Dima', 'Maxim', 'Vika'],
        balance: 400,
        skils: ['Coding', 'Singing'],
    },
    {
        name: 'Ira',
        eyeColor: 'Green',
        gender: 'Female',
        isActive: true,
        email: 'ira.krytaia@gmail.com',
        age: 14,
        friends: ['Artem', 'Bogdan', 'Maxim, Dima', 'Vlad'],
        balance: 900,
        skils: ['Coding', 'Comanding']
    },
    {
        name: 'Vlad',
        eyeColor: 'Grey',
        gender: 'Male',
        isActive: true,
        email: 'vlad.krytoi@gmail.com',
        age: 13,
        friends: ['Milan', 'Maxim', 'Artur', 'Vlad'],
        balance: 1209,
        skils: ['Coding', 'Karate']

    },
    {
        name: 'Vika',
        eyeColor: 'Brown',
        gender: 'Female',
        isActive: true,
        email: 'vika.krytaia@gmail.com',
        age: 13,
        friends: ['Milan', 'Artem', 'Bogdan'],
        balance: 807,
        skils: ['Coding', 'Traveling']

    },
    {
        name: 'Bogdan',
        eyeColor: 'Brown',
        gender: 'Male',
        isActive: false,
        email: 'bogdan.krytoi@gmail.com',
        age: 15,
        friends: [],
        balance: 0,
        skils: ['Playing comp. games']
    }
];

// 1
const sumOfBallance = arrayOfUsers.reduce((acc, value) => acc + value.balance, 0);
console.log(`Сума балансу всіх користувачів це ${sumOfBallance}₴.`);

// 2
const usersWithFriendVlad = arrayOfUsers.reduce((acc, person) => {

    if (person.friends.includes('Vlad')) {
      acc.push(person.name);
    }
    return acc;
  }, []);
  
  console.log(usersWithFriendVlad);

// 3
const sortUsersByFriends = (a, b) => b.friends.length - a.friends.length;
const arrayOfUsersCopy = [...arrayOfUsers];
console.log(arrayOfUsersCopy.sort(sortUsersByFriends))

// 4
const allSkils = arrayOfUsers.reduce((allSkils, currentUser) => {
    allSkils.push(...currentUser.skils)
    return allSkils;
}, []);

const uniqueSkils = allSkils.reduce((allSkils, currentSkill) => {
    if(allSkils.includes(currentSkill) === false){
        allSkils.push(currentSkill)
    }
    return allSkils;
}, []);
const sortedUniqueSkills = [...uniqueSkils].sort((a, b) => a - b)
console.log(sortedUniqueSkills);

