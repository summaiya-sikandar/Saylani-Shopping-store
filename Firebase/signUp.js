const firebaseConfig = {
    apiKey: "AIzaSyBpO6V3agSvMe3IUT_Pvtd_8HV4q-R0c8A",
    authDomain: "saylanishoppingstore.firebaseapp.com",
    projectId: "saylanishoppingstore",
    storageBucket: "saylanishoppingstore.appspot.com",
    messagingSenderId: "688654344247",
    appId: "1:688654344247:web:45a4e210075a5aee9a5fb2",
    measurementId: "G-65Q97G3FLY"
  };

  const app = firebase.initializeApp(firebaseConfig);
  console.log(app)
  
  const signup = () => {
      let username = document.getElementById('username').value;
      let contact = document.getElementById('contact').value;
      let email = document.getElementById('email').value;
      let password = document.getElementById('password').value;
      let role = 'User'
  
      console.log(email, password)
      firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((userCredential) => {
              let user = userCredential.user;
              firebase.database().ref('users/' + user.uid).set({
                  uid: user.uid,
                  username: username,
                  role: role,
                  contact: contact,
                  email: email,
                  password: password
              })
                  .then(() => {
                      const user = { email: email };
                      localStorage.setItem('user', JSON.stringify(user));
                      console.log('User created successfully.')
                      window.location.href = '../Common Screen/signin.html'
                  })
                  .catch((error) => {
                      console.log(error);
                  })
          })
          .catch((error) => {
              let errorCode = error.code;
              let errorMessage = error.message;
              console.log(errorCode + ': ' + errorMessage)
          });
  }
  
  const signin = () => {
      let email = document.getElementById('email').value
      let password = document.getElementById('password').value
      firebase.auth().signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
              let user = userCredential.user;
              console.log(user)
              const dbRef = firebase.database().ref();
              dbRef.child("users").child(user.uid).get().then((snapshot) => {
                  if (snapshot.exists()) {
                      const userData = snapshot.val()
                      if (userData.role === 'Admin') {
                          const user = { email: email };
                          localStorage.setItem('user', JSON.stringify(user));
                          console.log('User created successfully.')
                          window.location.href = '../Admin interface/Admin Products.html'
                      }
                      else {
                          const user = { email: email };
                          localStorage.setItem('user', JSON.stringify(user));
                          window.location.href = '../User Interface/Shop.html'
                      }
                  } else {
                      console.log("No data available");
                  }
              }).catch((error) => {
                  console.error(error);
              });
          })
          .catch((error) => {
              let errorCode = error.code;
              let errorMessage = error.message;
              console.log(errorCode + ': ' + errorMessage)
          });
  
  }

