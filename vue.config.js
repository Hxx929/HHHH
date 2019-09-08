module.exports = {
    configureWebpack:{
        devServer:{
            proxy:{
                "^/api":{
                    target:"http://118.89.234.135:7001",
                    changeOrigin:true,
                    pathRewrite:{
                        "^/api":""
                    }
                }
            },
            before(app){
                app.get("/getList",(req,res)=>{
                    let data = require("./src/mock/data.json")
                    res.send({
                        code:1,
                        data
                    })
                })
            }
        }
    }
}




