const presets = [
    [
        "@babel/preset-env",
        {
            useBuiltIns: 'usage',
            corejs: "3.26.0"
        }
    ]
]

module.exports = { presets }