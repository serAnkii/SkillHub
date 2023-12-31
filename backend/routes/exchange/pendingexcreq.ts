import express from "express"
import prisma from "../../prisma/prisma.ts";
import { randomUUID } from "crypto";


const router = express.Router()

router.get("/getexcrequests/:id",async (req,res)=>{
    const {id} = req.params;
    const data = await prisma.skill_exchanges.findMany({
        where: {
          sender_id: id,
          accepted:false,
          
        },
      });
    if(data)
    {
        res.json(data)

    }
    else{
        res.sendStatus(404);
    }


})

export default router