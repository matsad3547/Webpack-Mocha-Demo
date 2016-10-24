module.exports = {
 context: __dirname + "/src",
 entry: "./scripts/entry.js",
 output: {
   path: __dirname + "/public",
   filename: "./bundle.js"
 },
 module: {
   loaders: [
     {
       test: /\.css$/,
       loaders: "style!css"
     },
     {
       test: /\.sass$/,
       loaders: ["style", "css", "sass"]
     }
   ]
 }
};
