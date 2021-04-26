
var admin = require("firebase-admin");

var serviceAccount = require("./my-project-test-private-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

//const db = admin.Firestore()

function getdatabase() {
  return admin.firestore()
}

module.exports = getdatabase
