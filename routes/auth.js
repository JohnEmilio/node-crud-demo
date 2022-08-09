const express = require('express')
const passport = require('passport')
const router = express.Router()


// @disc   Auth with Google
// @route  GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

// @disc    Google auth callback
// @route   GET /auth/google/callback
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        res.redirect('/dashboard')
    }
)

// @disc   Dashboard
// @route  GET /dashboard
router.get('/dashboard', (req, res) => {
    res.render('dashboard')
});

// @disc    Logout user
// @route   /auth/logout
router.get('/logout', (req, res, next) => {
    req.logout(err => {
        if (err) {
            return next(err)
        }
        res.redirect('/')
    })
});

module.exports = router