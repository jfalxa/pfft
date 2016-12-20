const merge        = require( 'webpack-merge' );
const eslintConfig = require( 'pfft-partial-eslint' );


const reactEslintConfig =
{
    "parserOptions":
    {
        "ecmaFeatures":
        {
            "jsx": true
        }
    },

    "plugins":
    [
        "react"
    ],

    "extends":
    [
        "plugin:react/recommended"
    ]
};


module.exports = merge( eslintConfig, reactEslintConfig );
