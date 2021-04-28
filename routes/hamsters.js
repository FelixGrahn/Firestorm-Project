const getdatabase = require('../database.js')
const db = getdatabase()


const express = require('express')
const router = express.Router()


router.get('/', async (req, res) => {
  // console.log('/hamsters REST API');
  // res.send('hamsters REST API')

  const hamstersRef = db.collection('hamsters')
  const snapshot = await hamstersRef.get()

  if( snapshot.empty ) {
    res.send([])
    return
  }

  let items = []
  snapshot.forEach(doc => {
    const data = doc.data()
    data.id = doc.id
    items.push( data )

  })
  res.send(items)
})


//random hamster
router.get('/random', async (req, res) => {
  console.log("/random");
  const hamstersRef = db.collection('hamsters')
  const snapshot = await hamstersRef.get()

  // if( snapshot.empty ) {
  //   res.send([])
  //   return
  // }

  let items = []
  snapshot.forEach(doc => {
    const data = doc.data()
    data.id = doc.id
    items.push( data )
  })
  var randomobject = items[Math.floor(Math.random() * items.length)];
  console.log(randomobject);
  res.send(randomobject)
})

router.get('/:id', async (req, res) => {
  var searchid = req.params.id;
  console.log(searchid);
  // console.log("/id-page");

  const hamstersRef = db.collection('hamsters')
  const snapshot = await hamstersRef.get()

  let items = []
  snapshot.forEach(doc => {
    const data = doc.data()
    data.id = doc.id
    if (doc.id == searchid) {
      console.log(doc.id + " is equal to " + searchid);
      items.push( data )
    }
  })
  console.log(items);
  if (items == false) {
    console.log("404 logger");
    res.sendStatus(404)
  }
  else {
    res.send(items)
  }
})

router.post('/', async (req, res) => {
  console.log("/post-page");
  console.log(req.body);
  const posthamsterobject = req.body;

      if(fullhamster(posthamsterobject) == true){
        console.log("reached the post point");
          const docRef = await db.collection('hamsters').add(posthamsterobject);
          res.send(docRef.id);
          // res.send("the end of the response")
      }
      else {
        console.log("inside second if statement");
          res.sendStatus(400);
          return;
      }

})

function fullhamster(hamob) {
  console.log("the beginning of the function");

  if (hamob == {}) {
    console.log("first false");
    return false
  }
  else if(((hamob.name) && (hamob.age) && (hamob.favFood) && (hamob.loves) && (hamob.imgName) && (hamob.wins || hamob.wins === 0) && (hamob.defeats || hamob.defeats === 0) && (hamob.games || hamob.games === 0)) == true)
  {
    console.log("second true");
    return true;
  }
  else {
    console.log(hamob);
    console.log("third false or hamob etc");
    return false
  }

}


router.put('/:id', async (req, res) => {
  console.log("/post-put");
  console.log(req.body);
  const bodycontent = req.body;
  var searchid = req.params.id;
  console.log(searchid);
  console.log(bodycontent);

const docRef = await db.collection('hamsters').doc(searchid).get()

if (docRef == false) {
   return res.sendStatus(404).send('bad hamster')
}
await db.collection('hamsters').doc(searchid).set(bodycontent, {merge: true})
res.sendStatus(200)

})

router.delete('/:id', async (req, res) =>{
  var searchid = req.params.id;

  if (searchid == false) {
    res.sendStatus(400);
  }
  await db.collection('hamsters').doc(searchid).delete()
    res.sendStatus(200);
})





module.exports = router
