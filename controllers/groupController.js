const Ipdb = require("../models/ippostdb.model");
const Iphomedb = require("../models/iphomedb.model");

class groupController {
    async getData(req, res) {
        try {
            const {
                ip,
                post
            } = req.body;
            const data = await Ipdb.find({
                "post": post
            })
            console.log(data)

            // if (data) {
            //     let sum = 0;
            //     data.map((item) => {
            //         sum += item.sl;
            //     });
            //     res.status(201).send({
            //         sum,
            //         mess: "Thành công"
            //     })
            // } else {
            //     res.status(404).send({
            //         mess: "Thất bại"
            //     })
            // }

        } catch (error) {
            res.status(500).send({
                error,
                mess: "Thất bại"
            })
        }
    }
    async postData(req, res) {
        try {
            const {
                ip,
                post
            } = req.body;
            const data = await Ipdb.findOne({
                // where: {
                "ip": ip,
                "post": post
                // }
            })

            if (data) {
                data.sl++;
                await data.save();
                res.status(201).send({
                    mess: "Thành công"
                })
            } else {
                const ipdatabase = await Ipdb.create({
                    ip: ip,
                    post: post,
                    sl: 1
                });

                if (ipdatabase) res.status(201).send({
                    mess: "Thành công"
                })
            }

        } catch (error) {
            res.status(500).send({
                error,
                mess: "Thất bại"
            })
        }
    }
    async postDataHome(req, res) {
        try {
            let sum = 1;

            const database = await Iphomedb.find({});



            const {
                ip
            } = req.body;
            const data = await Iphomedb.findOne({
                // where: {
                "ip": ip
                // }
            });

            //console.log(Iphomedb.findAll({}));
            if (data) {
                data.sl++;
                await data.save();
            } else {
                const Ipdb = await Iphomedb.create({
                    ip: ip,
                    sl: 1
                });

            }

            database.map((item) => {
                sum += item.sl;
            })


            res.status(200).send({
                sum
            })

        } catch (error) {
            res.status(500).send({
                error,
                mess: "Thất bại"
            })
        }
    }

}

module.exports = new groupController();