const express = require('express')
const router = express.Router()

const testService = require('../services/test.service')

router.get('/', async (req,res) => {
    try {
        console.log("this is test/ route")
        res.json(await testService.find())
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})

router.get('/findonetest', async (req,res) => {
    try {
        console.log("this is test/findonetest route")
        res.json(await testService.findByOne())
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})

router.patch('/update-alt-image-table', async (req,res) => {
    try {
        console.log("this is route")
        res.json(await testService.updateAltImageTable())
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})

router.patch('/update-alt-reviews-image-table', async (req,res) => {
    try {
        console.log("this is route")
        res.json(await testService.updateAltReviewsImageTable())
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})

module.exports = {
    router
}