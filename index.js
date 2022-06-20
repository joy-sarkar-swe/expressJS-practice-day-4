const express = require("express");
const app = express();
const userRouter = express.Router();
const adminRouter = express.Router();
// app.use(express.json());

// middleWare - 1
// function middleWare(req, res, next) {
//   /*   try {
//         console.log(a);
//     } catch(error) {
//         throw Error(error.message);
//     } */
//     console.log("this is first middleware....!");
//     next();
// };

// middleWare - 2
/* function middleWare2(req, res, next) {
    console.log(req.url);
    next();
}; */

// app.use(middleWare);
// app.use(middleWare2);
// app.use([middleWare, middleWare2]);

// middleWare - 3
/* app.get("/", (req, res, next) => {
    res.send("Hi, there....!")
}); */

// err handling middleware
function errMiddleWare(err, req, res, next) {
    console.log(err.message);
    res.status(500).send("server error...!");
    next();
};


/* app.all("*", (req, res) => {
    res.sendStatus(404);
}) */
//==================================================================================//
/* function log(req, res, next) {
    console.log(`${req.url} => ${Date.now()}`);
    next()
} */

// function log(options) {
//     return (res, req, next) => {
//         if (options.log) {
//             console.log(Date.now());
//             next();
//         } else {
//             next();
//         }
//     }
// }

// userRouter.use(log({ log: true}));
// userRouter.get("/list", (req, res) => {
//     res.send("Hello there...!")
// });
// adminRouter.get("/list", (req, res) => {
//     res.send("Hello there admin router...!")
// });

// app.use(log);
// app.use("/user", userRouter);
// app.use("/admin", adminRouter);
 
// ==============================================================================//

app.get("/app", (req, res) => {
    
});

// server running at 3000 port
app.listen(3000, () => {
    console.log("server is running at 3000 port");
});

app.use(errMiddleWare);