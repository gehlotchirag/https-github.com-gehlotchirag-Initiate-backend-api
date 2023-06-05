const  Items = require('../schema/itemSchema') 

exports.createItems =async (req,res) => {
    try {
        console.log("worked")
        const {
            name,
            description,
            price,
            image
        } = req.body
        const items = await Items.create({
            name,
            description,
            price,
            image
        });
        console.log(items)
        res.status(200).json({
            success:true,
            items
        });
    }catch(err){
        res.status(400).json({
            success:false,
        });
    }
    
}

exports.getAllItems =async (req,res) => {
    try{
        const items = await Items.find();
        res.status(200).json({
            success:true,
            items
        });
    }catch(err){
        res.status(400).json({
            success:false,
        });
    }
}




exports.getItemById =async (req,res) => {
    try{
        const items = await Items.findById(req.params.id);
        if(!items){
            res.status(200).json({
                success:false,
                message:"item not found"
            });
        }
        res.status(200).json({
            success:true,
            items
        });
    }catch(err){
        res.status(400).json({
            success:false,
        });
    }
}
