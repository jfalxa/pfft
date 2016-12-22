module.exports =
{
    env :
    {
        coverage :
        {
            plugins :
            [
                [
                    'istanbul',
                    {
                        exclude : ['test/**/*']
                    }
                ]
            ]
        }
    }
}
