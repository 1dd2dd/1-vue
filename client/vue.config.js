module.exports = {
    outputDir:"../server/web",//保存到
    publicPath:"/myblog",//路径下的打包文件可以在浏览器中访问
    devServer:{
        port:8081,
        proxy:{
            "/api":{
                target:"http://localhost:8080",
                pathRewrite:{
                    "api":"/myblog"
                },
                changeOrigin:true
            }
        }
    }
}