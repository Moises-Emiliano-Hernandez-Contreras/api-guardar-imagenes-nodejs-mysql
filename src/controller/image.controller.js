const multer = require('multer')
const path = require('path')
const storage= multer.diskStorage({
      //destination:path.join(__dirname,'../../images'),
      destination:path.join(__dirname,'images'),
      filename:(req,file,callback)=>{
            callback(null,`${Date.now()}-${file.originalname}`)
      }
})
const upload= multer({storage:storage})

exports.upload=upload.single('image')

exports.uploadFile=(req,res)=>{
      req.getConnection((err,conn) => {
            if(err){
                  return res.send(err)
            }else{
                  const tipo = req.file.mimetype
                  const nombre = req.file.originalname
                  conn.query("INSERT INTO "+req.params.image +" SET ?",[{tipo,nombre}],                  
                  (err,rows)=>{
                        console.log(
                              err?"INSERT INTO "+req.params.image+" "+err
                              :req.params.image +": Imagen agregada"                              
                        )
                        res.json(
                              err?{err:"Error al cargar la imagen"}:
                              {msg:"Imagen cargada"}                              
                        )
                  })
            }            
      })
}
exports.getDatos=(req,res)=>{
/*       req.getConnection((err,conn)=>{
            if(err){
                  return res.send(err)
            }else{
                  conn.query("SELECT * FROM "+req.params.image+" WHERE id=1;",(err,rows)=>{
                        if(err){
                              return res.send(err)
                        }else{
                              res.sendFile(rows)
                        }
                  })
            }            
      }) */
      res.sendFile(path.join(__dirname,"../../images/1669003666374-289658471_448447450456531_1211942329290764363_n.webp"))
}