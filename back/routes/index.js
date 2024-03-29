var express = require("express");
var router = express.Router();

//JWT
const verifyJwt = require("../middleware/jwt");
const createToken = require("../utils/createToken");

const { zctracli, zctraptf, zope, zlignptf, zmvt } = require("../models"); // Import your Sequelize model

// ROUTE CLICK LOGIN GET ID USER
router.post("/zctracli", async function (req, res, next) {
  try {
    const { login, password } = req.body;

    if (login === "admin" && password === process.env.ADMIN_PASSWORD) {
      //CREATE TOKEN WITH HIDDEN USERID KEY
      const token = createToken("admin");

      res.json({
        admin: true,
        message: "ADMIN ACCESS !",
        token,
      });
      return;
    }

    const user = await zctracli.findOne({
      where: {
        Login_lmt: login,
        Password_lmt: password,
      },
    });

    console.log(user);
    if (!user) {
      res.json({
        message: "Identifiants incorrects, veuillez réessayer.",
        data: user,
      });
    } else {
      //CREATE TOKEN WITH HIDDEN USERID KEY
      const token = createToken(user.IdCtraCli);

      res.json({
        message: "User found !",
        IdCtraCli: user.IdCtraCli,
        token,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ROUTE ON PAGE PTF : POST USER ID AND GET PTFS
router.post("/zctraptf", verifyJwt, async function (req, res, next) {
  try {
    // FROM TOKEN
    const IdCtraCli = req.IdCtraCli;
    // const { IdCtraCli } = req.body;

    const ptfs = await zctraptf.findAll({
      where: {
        IdCtraCli: IdCtraCli,
      },
    });

    // Assuming ptfs is an array of objects
    const totMV = ptfs.reduce(
      (acc, obj) => acc + parseFloat(obj.MktValAaiDevCLIAuc_lcn),
      0
    );

    res.json({
      auth: true,
      message: "Portfolios found !",
      data: ptfs,
      totMV: totMV,
    }); // Send the result as JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ROUTE ON PAGE PTF : POST PTFs ID AND GET ALL OPE
router.post("/zope", verifyJwt, async function (req, res, next) {
  try {
    const { IdCtraPtf } = req.body;

    const ope = await zope.findAll({
      where: {
        IdCtraPtf: IdCtraPtf,
      },
    });

    res.json({ auth: true, message: "Operations found !", data: ope }); // Send the result as JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ROUTE ON PAGE DETPTF : POST PTF ID AND GET ALL LIGN
router.post("/zlignptf", verifyJwt, async function (req, res, next) {
  try {
    console.log(req.body);
    const { IdCtraPtf } = req.body;
    console.log("id", IdCtraPtf);
    const ligns = await zlignptf.findAll({
      where: {
        IdCtraPtf: IdCtraPtf,
      },
      order: [["LangueNomLocalAlloc_lmt", "ASC"]], // ASC for ascending, DESC for descending
    });
    res.json({ auth: true, message: "Ligns found !", data: ligns }); // Send the result as JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ROUTE ON PAGE DETPTF : POST PTF ID AND GET ALL LIGN
router.post("/zmvt", verifyJwt, async function (req, res, next) {
  try {
    const { IdCtraPtf, IdAsset } = req.body;
    console.log(req.body);

    const mvt = await zmvt.findAll({
      where: {
        IdPtf: IdCtraPtf,
        idAsset: IdAsset,
      },
      order: [["CptaDateOPE_lsd", "DESC"]], // ASC for ascending, DESC for descending
    });

    res.json({ auth: true, message: "Mvt found !", data: mvt }); // Send the result as JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/auth", verifyJwt, function (req, res) {
  res.json({ auth: true, message: "token success !" });
});

module.exports = router;
