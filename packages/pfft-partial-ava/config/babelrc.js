module.exports =
{
    env :
    {
        coverage :
        {
            ignore : 'test/**/*',

            plugins :
            [
                [
                    'istanbul',
                    {
                        include : ['src/**/*.js'],
                        exclude : ['test/**/*']
                    }
                ]
            ]
        }
    }
}
