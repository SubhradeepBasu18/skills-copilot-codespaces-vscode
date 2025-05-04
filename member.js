function skillsMember(){
    return {
        name: 'skills',
        description: 'Skills that I have',
        type: 1,
        options: [
            {
                name: 'skills',
                description: 'Skills that I have',
                type: 3,
                required: true,
                choices: [
                    {
                        name: 'JavaScript',
                        value: 'javascript'
                    },
                    {
                        name: 'Python',
                        value: 'python'
                    },
                    {
                        name: 'Java',
                        value: 'java'
                    }
                ]
            }
        ]
    };
}