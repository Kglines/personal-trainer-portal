const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

const { MonthlyClientReport, MonthlyClientReportDetail } = require('../../db/models');
const { requireAuth } = require("../../utils/auth");

const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_EMAIL_PASSWORD,
    },
  });

// ************************** Get Monthly Client Reports **************************
router.get('/', requireAuth,  async (req, res) => {
    const monthlyClientReports = await MonthlyClientReport.findAll({
        include: MonthlyClientReportDetail
    });
    res.json(monthlyClientReports);
});

// ************************** Get Monthly Client Report by Id **************************
router.get('/:id', requireAuth, async (req, res) => {
    const { id } = req.params;
    const monthlyClientReportId = parseInt(id);
    const monthlyClientReport = await MonthlyClientReport.findByPk(monthlyClientReportId, {
        include: MonthlyClientReportDetail
    });
    res.json(monthlyClientReport);
});

// ************************** Create Monthly Client Report **************************
router.post('/', requireAuth, async (req, res) => {
    const { userId, month, year } = req.body;
    const monthlyClientReport = await MonthlyClientReport.create({ userId, month, year });
    res.json(monthlyClientReport);
});

// ************************** Update Monthly Client Report **************************
router.put('/:id', requireAuth, async (req, res) => {
    const { userId, month, year } = req.body;
    const { id } = req.params;
    const monthlyClientReportId = parseInt(id);
    const monthlyClientReport = await MonthlyClientReport.findByPk(monthlyClientReportId);
    if (monthlyClientReport) {
        await monthlyClientReport.update({ userId, month, year });
        res.json(monthlyClientReport);
    } else {
        const error = new Error('Monthly Client Report not found');
        error.status = 404;
        throw error;
    }
});

// ************************** Delete Monthly Client Report **************************
router.delete('/:id', requireAuth, async (req, res) => {
    const { id } = req.params;
    const monthlyClientReportId = parseInt(id);
    const monthlyClientReport = await MonthlyClientReport.findByPk(monthlyClientReportId);
    if (monthlyClientReport) {
        await monthlyClientReport.destroy();
        res.json({ message: `Deleted Monthly Client Report with id ${monthlyClientReportId}` });
    } else {
        const error = new Error('Monthly Client Report not found');
        error.status = 404;
        throw error;
    }
});

module.exports = router