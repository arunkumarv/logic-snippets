const data = [
    { name: '10', age: 10 },
    { name: 'Acxzcrunkumar V', age: 10 },
    { name: 'Arunkumzxczr V', age: 30 },
    { name: 'Arunkuzxczmar V', age: 40 },
    { name: 'Arunkxzczumar V', age: 40 },
    { name: 'Arunzxczkumar V', age: 50 },
    { name: 'Aruzxcznkumar V', age: 60 },
    { name: 'Arzxczunkumar V', age: 60 },
    { name: 'Arzxczunkumar V', age: 60 },
    { name: 'Arunkzxczumar V', age: 20 },
    { name: 'Arunkumarzczx V', age: 30 },
    { name: 'Arunkumarzcz V', age: 80 },
];

const grouped = data.reduce (( acc, user ) => {
    console.log (acc);
    console.log ('---------')
    return { ...acc, [user.age]: user };
}, {});

console.log ( grouped );

