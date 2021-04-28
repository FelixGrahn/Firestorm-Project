
var admin = require("firebase-admin");

var serviceAccount = require("./my-project-test-private-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


function getdatabase() {
  return admin.firestore()
}

module.exports = getdatabase
