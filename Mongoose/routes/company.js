const express = require('express');
const router = express.Router();
const Company = require('../models/company')
const Employee = require('../models/employee')

router.get("/", async (req, res) => {
    const companyList = await Company.find({})
    const registeredCompaniesCount = companyList.length
    res.render('index', { registeredCompaniesCount: registeredCompaniesCount})
})

router.get("/registered", async (req,res) => {
    const companyList = await Company.find({})
    res.render('registeredCompanies', {companyList: companyList})
})

router.get("/employees/:regNum", (req, res) => {

})

router.post("/create", (req, res) => {
    if (!req.body.name || !req.body.registerNumber || !req.body.city || !req.body.province || !req.body.creationDate || !req.body.phoneNumber) {
        return res.status(406).json({msg: 'Not Acceptable'});
    };
    const NEW_COMPANY = new Company({
        name: req.body.name,
        registerNumber: req.body.registerNumber,
        city: req.body.city,
        province: req.body.province,
        creationDate: req.body.creationDate,
        phoneNumber: req.body.phoneNumber,
    });

    NEW_COMPANY.save((err, savedCompany) => {
        if (err) {
            return res.status(500).json({msg: "Somthing went wrong"})
        };
        res.json(savedCompany)
    })
})

router.post("/createEmployee", async (req, res) => {
    // if (!req.body.firstName || !req.body.lastName || !req.body.nationalCode || !req.body.sex || !req.body.isManager || !req.body.birthDate || !req.body.companyId) {
    //     return res.status(406).json({msg: 'Not Acceptable'});
    // };
    const company = await Company.findById(req.body.companyId);
    const NEW_EMPLOYEE = new Employee({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        nationalCode: req.body.nationalCode,
        sex: req.body.sex,
        isManager: req.body.isManager,
        birthDate: req.body.birthDate,
        companyId: company.id
    });

    await NEW_EMPLOYEE.save((err, savedEmployee) => {
        if (err) {
            console.log(err)
            return res.status(500).json({msg: "Somthing went wrong"})
        };
        res.json(savedEmployee)
    })
})

router.post("/delete", (req, res) => {
    if (!req.body.registerNumber) {
        return res.status(406).json({msg: 'A register number is required to delete.'});
    };
    Company.deleteOne({ registerNumber: req.body.registerNumber }, function (err) {
        if (err) return console.log(err)
    })
    res.json({RegisterNumber: req.body.registerNumber,
    msg: "Successfully Deleted!"})
})

module.exports = router