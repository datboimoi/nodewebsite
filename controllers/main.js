exports.getHomePage = (req, res, next) => {
    res.render ('home', {
        pageTitle: 'My Node Project | Home'
    })
}