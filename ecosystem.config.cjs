module.exports = {
    apps: [
        {
            name: 'Portfolio',
            port: '3001',
            exec_mode: 'cluster',
            instances: 'max',
            script: './server/index.mjs'
        }
    ]
}