function getUsers(req, res) {
    res.status(200).json([
        {
            name: 'John',
            age: 30
        },
        {
            name: 'Mike',
            age: 23
        },
        {
            name: 'Jane',
            age: 25
        },
        {
            name: 'Mary',
            age: 28
        },
        {
            name: 'Tom',
            age: 20
        }
    ]);
}

const createUser = (req, res) => {
    res.status(201).json({
        data: {
            name: req.body.name,
            age: req.body.age,
            status: req.body.age < 18 ? 'underage' : 'adult'
        },
        message: 'User created successfully'
    });
}

module.exports = {
    getUsers,
    createUser,
}