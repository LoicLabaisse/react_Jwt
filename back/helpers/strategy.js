const connection = require("./db");
const bcrypt = require("bcrypt");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      session: false,
    },
    function (email, password, cb) {
      connection.query(
        "SELECT * FROM users WHERE email = ?",
        email,
        (err, results) => {
          if (err) {
            return cb(err);
          } else {
            if (results[0] == undefined) {
              // si les login/password ne sont pas bon
              return cb(null, false, {
                message: "Incorrect email ou password.",
              });
            } else if (bcrypt.compareSync(password, results[0].password)) {
              const user = {
                email: email,
              };
              return cb(null, user, {
                message: "Success !",
              });
            }

            // si l'utilisateur est ok on retourne l'objet user
            else {
              return cb(null, false, {
                message: "Incorrect Password !",
              });
            }
          }
        }
      );
    }
    //ton code ici// si une erreur est obtenue
  )
);
passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.DB_SECRET,
    },
    function (jwtPayload, cb) {
      return cb(null, jwtPayload);
    }
  )
);
