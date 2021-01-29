let state = {
    profilePage: {
        postsData: [
            {id: 1, message: 'text1', likes: 15, reply: 5, views: 20},
            {id: 2, message: 'text2', likes: 20, reply: 4, views: 40}
        ],

        user: {name: 'Ivan Glebov', birthDate: '08.02.2002', city: 'Vsevolozhsk'}
    },
    messagesPage: {
        usersData: [
            {
                id: 1,
                name: 'User name 1',
                imgSrc: 'data:image/png;base64,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'
            },
            {id: 2, name: 'User name 2', imgSrc: '#'},
            {id: 3, name: 'User name 3'},
            {id: 4, name: 'User name 4'},
            {id: 5, name: 'User name 5'},
            {id: 6, name: 'User name 6'},
            {id: 7, name: 'User name 7'},
            {id: 8, name: 'User name 8'},
            {id: 9, name: 'User name 9'}
        ],
        messagesData: [
            {id: 1, content: 'Message 1'},
            {id: 2, content: 'Message 2'},
            {id: 3, content: 'Message 3'},
            {id: 4, content: 'Message 4'},
            {id: 5, content: 'Message 5'},
            {id: 6, content: 'Message 6'},
            {id: 7, content: 'Message 7'},
            {id: 8, content: 'Message 8'},
            {id: 9, content: 'Message 9'},
        ]
    },
    navbar: {
        recentFriends: [
            {
                src: '/messages/IvanGlebov',
                name: "Ivan",
                surname: "Glebov",
                imgSource: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSQYWj8d2vOIvQsu6KCVpu8e77DT7_WPfwLw&usqp=CAU"
            },
            {
                src: '/messages/Ksusha',
                name: "Ksusha",
                surname: 'Tests',
                imgSource: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSQYWj8d2vOIvQsu6KCVpu8e77DT7_WPfwLw&usqp=CAU"
            },
            {
                src: '/messages/Really',
                name: "Really",
                surname: 'Glebov3',
                imgSource: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSQYWj8d2vOIvQsu6KCVpu8e77DT7_WPfwLw&usqp=CAU"
            }
        ]
    }

}


export default state;
