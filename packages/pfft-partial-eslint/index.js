module.exports =
{
    "parser" : "babel-eslint",

    "extends":
    [
        "eslint:recommended"
    ],

    "env":
    {
        "browser" : true,
        "node"    : true
    },

    "rules":
    {
        "brace-style" : ["error", "allman"],
        "semi"        : ["error", "always"],
        "indent"      : ["error", 4, { "SwitchCase" : 1, "VariableDeclarator" : 0 }],
        "key-spacing" : ["error", { "align": "colon", "beforeColon": true, "afterColon": true }]
    }
}
