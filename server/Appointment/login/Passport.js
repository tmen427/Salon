const LocalStrategy = require('passport-local').Strategy;
const connection = require('../../db.js');

module.exports = function(passport) {
    passport.use(new LocalStrategy({usernameField: 'email', passwordField: 'password'},
        (email, password, done) => {
            try {
                connection.query("SELECT * from signin where email = ?", [email], (err, user) => {
                    if (err) {
                        console.error(`Error while fetching user from DB: ${err}`);
                        return done(err);
                    } else if (Object.keys(user).length === 0) {
                        console.log(`${email} not found`);
                        return done(null, false);
                    } else {
                        console.log(user)
                        return done(null, user[0]);
                    }
                });
            } catch (e) {
                console.error((`error: ${typeof e}`));
            }
        })
    )

    passport.serializeUser(function(user, cb) {
        cb(null, user.id);
    });

    passport.deserializeUser(function(id, cb) {
        connection.query("SELECT * FROM signin WHERE id = ?", [id], (err, user) => {
            try {
                if (err) return cb(err);
                cb(null, user);
            }
            catch (err) {
                console.error(err);
            }
        })
    });
};