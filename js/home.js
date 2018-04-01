var config = {
  	  apiKey: "AIzaSyDb7PQjkzYvTZPIFVkBY2NjsjiTTtBMJqM",
  	  authDomain: "jaunt-ddc86.firebaseapp.com",
  	  databaseURL: "https://jaunt-ddc86.firebaseio.com",
  	  projectId: "jaunt-ddc86",
  	  storageBucket: "jaunt-ddc86.appspot.com",
  	  messagingSenderId: "40972835460"
  	};
		  
  	firebase.initializeApp(config);
	  /**
     * Handles the sign in button press.
     */
    function toggleSignIn() {
      if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();
        // [END signout]
      } else {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        if (email.length < 4) {
          alert('Please enter an email address.');
          return;
        }
        if (password.length < 4) {
          alert('Please enter a password.');
          return;
        }
        // Sign in with email and pass.
        // [START authwithemail]
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            console.error(error);
          }
          // [END_EXCLUDE]
        });
        // [END authwithemail]
      }
      document.getElementById('quickstart-sign-in').disabled = true;
    }
	
    /**
     * initApp handles setting up UI event listeners and registering Firebase auth listeners:
     *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
     *    out, and that is where we update the UI.
     */
    function initApp() {
      // Listening for auth state changes.
      // [START authstatelistener]
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var refreshToken = user.refreshToken;
          var providerData = user.providerData;
		
		  const imgRef = firebase.storage().ref();
			
		  //SET NAME + Email + ProfPic
		  var mainRef = firebase.database().ref('Users/' + uid);
		  mainRef.once("value")
  		  	  .then(function(snapshot) {
  		  	  	  var name = snapshot.child('/name').val();
			  	  var email = snapshot.child('/email').val();
			  	  var authorPic = snapshot.child('/profile_picture').val();
			      document.getElementById('name').textContent = name;
			  	  document.getElementById('email').textContent = email;
  		  });	
			
		  var mainRef1 = firebase.database().ref('Admin/xplore');
		  mainRef1.once("value")
  		  	  .then(function(snapshot) {
  		  	  	  var largeTitle1 = snapshot.child('/large/title1').val();
			  	  var largeTitle2 = snapshot.child('/large/title2').val();
			 	  var largeTitle3 = snapshot.child('/large/title3').val();
			 	  var largeTitle4 = snapshot.child('/large/body1').val();
			 	  var largeTitle5 = snapshot.child('/large/body2').val();
			 	  var largeTitle6 = snapshot.child('/large/lat').val();
			 	  var largeTitle7 = snapshot.child('/large/long').val();
			 	  var largeTitle8 = snapshot.child('/large/localName').val();
			 	  var largeTitle9 = snapshot.child('/large/localAbout').val();
			 	  var largeTitle10 = snapshot.child('/large/localUID').val();
			      document.getElementById('largeTitle1In').value = largeTitle1;
			      document.getElementById('largeTitle2In').value = largeTitle2;
			      document.getElementById('largeTitle3In').value = largeTitle3;
			      document.getElementById('largeTitle4In').value = largeTitle4;
			      document.getElementById('largeTitle5In').value = largeTitle5;
			      document.getElementById('largeTitle6In').value = largeTitle6;
			      document.getElementById('largeTitle7In').value = largeTitle7;
			      document.getElementById('largeNameIn').value = largeTitle8;
			      document.getElementById('largeAboutIn').value = largeTitle9;
			      document.getElementById('largeUIDIn').value = largeTitle10;
			  
			  	  var small1Title1 = snapshot.child('/small1/title1').val();
			  	  var small1Title2 = snapshot.child('/small1/title2').val();
			 	  var small1Title3 = snapshot.child('/small1/title3').val();
			 	  var small1Title4 = snapshot.child('/small1/body1').val();
			 	  var small1Title5 = snapshot.child('/small1/body2').val();
			 	  var small1Title6 = snapshot.child('/small1/lat').val();
			 	  var small1Title7 = snapshot.child('/small1/long').val();
			 	  var small1Title8 = snapshot.child('/small1/localName').val();
			 	  var small1Title9 = snapshot.child('/small1/localAbout').val();
			 	  var small1Title10 = snapshot.child('/small1/localUID').val();
			      document.getElementById('small1Title1In').value = small1Title1;
			      document.getElementById('small1Title2In').value = small1Title2;
			      document.getElementById('small1Title3In').value = small1Title3;
			      document.getElementById('small1Title4In').value = small1Title4;
			      document.getElementById('small1Title5In').value = small1Title5;
			      document.getElementById('small1Title6In').value = small1Title6;
			      document.getElementById('small1Title7In').value = small1Title7;
			      document.getElementById('small1NameIn').value = small1Title8;
			      document.getElementById('small1AboutIn').value = small1Title9;
			      document.getElementById('small1UIDIn').value = small1Title10;
			  
			  	  var small2Title1 = snapshot.child('/small2/title1').val();
			  	  var small2Title2 = snapshot.child('/small2/title2').val();
			 	  var small2Title3 = snapshot.child('/small2/title3').val();
			  	  var small2Title4 = snapshot.child('/small2/body1').val();
			 	  var small2Title5 = snapshot.child('/small2/body2').val();
			  	  var small2Title6 = snapshot.child('/small2/lat').val();
			 	  var small2Title7 = snapshot.child('/small2/long').val();
			      var small2Title8 = snapshot.child('/small2/localName').val();
			 	  var small2Title9 = snapshot.child('/small2/localAbout').val();
			 	  var small2Title10 = snapshot.child('/small2/localUID').val();
			      document.getElementById('small2Title1In').value = small2Title1;
			      document.getElementById('small2Title2In').value = small2Title2;
			      document.getElementById('small2Title3In').value = small2Title3;
			      document.getElementById('small2Title4In').value = small2Title4;
			      document.getElementById('small2Title5In').value = small2Title5;
			      document.getElementById('small2Title6In').value = small2Title6;
			      document.getElementById('small2Title7In').value = small2Title7;
			      document.getElementById('small2NameIn').value = small2Title8;
			      document.getElementById('small2AboutIn').value = small2Title9;
			      document.getElementById('small2UIDIn').value = small2Title10;
			  
			  	  var small3Title1 = snapshot.child('/small3/title1').val();
			  	  var small3Title2 = snapshot.child('/small3/title2').val();
			 	  var small3Title3 = snapshot.child('/small3/title3').val();
			  	  var small3Title4 = snapshot.child('/small3/body1').val();
			 	  var small3Title5 = snapshot.child('/small3/body2').val();
			      var small3Title6 = snapshot.child('/small3/lat').val();
			 	  var small3Title7 = snapshot.child('/small3/long').val();
			      var small3Title8 = snapshot.child('/small3/localName').val();
			 	  var small3Title9 = snapshot.child('/small3/localAbout').val();
			 	  var small3Title10 = snapshot.child('/small3/localUID').val();
			      document.getElementById('small3Title1In').value = small3Title1;
			      document.getElementById('small3Title2In').value = small3Title2;
			      document.getElementById('small3Title3In').value = small3Title3;
			      document.getElementById('small3Title4In').value = small3Title4;
			      document.getElementById('small3Title5In').value = small3Title5;
			      document.getElementById('small3Title6In').value = small3Title6;
			      document.getElementById('small3Title7In').value = small3Title7;
			      document.getElementById('small3NameIn').value = small3Title8;
			      document.getElementById('small3AboutIn').value = small3Title9;
			      document.getElementById('small3UIDIn').value = small3Title10;
			  
			  	  var small4Title1 = snapshot.child('/small4/title1').val();
			  	  var small4Title2 = snapshot.child('/small4/title2').val();
			 	  var small4Title3 = snapshot.child('/small4/title3').val();
			  	  var small4Title4 = snapshot.child('/small4/body1').val();
			 	  var small4Title5 = snapshot.child('/small4/body2').val();
			      var small4Title6 = snapshot.child('/small4/lat').val();
			 	  var small4Title7 = snapshot.child('/small4/long').val();
			      var small4Title8 = snapshot.child('/small4/localName').val();
			 	  var small4Title9 = snapshot.child('/small4/localAbout').val();
			 	  var small4Title10 = snapshot.child('/small4/localUID').val();
			      document.getElementById('small4Title1In').value = small4Title1;
			      document.getElementById('small4Title2In').value = small4Title2;
			      document.getElementById('small4Title3In').value = small4Title3;
			      document.getElementById('small4Title4In').value = small4Title4;
			      document.getElementById('small4Title5In').value = small4Title5;
			      document.getElementById('small4Title6In').value = small4Title6;
			      document.getElementById('small4Title7In').value = small4Title7;
			      document.getElementById('small4NameIn').value = small4Title8;
			      document.getElementById('small4AboutIn').value = small4Title9;
			      document.getElementById('small4UIDIn').value = small4Title10;
			  
			  	  var small5Title1 = snapshot.child('/small5/title1').val();
			  	  var small5Title2 = snapshot.child('/small5/title2').val();
			 	  var small5Title3 = snapshot.child('/small5/title3').val();
			  	  var small5Title4 = snapshot.child('/small5/body1').val();
			 	  var small5Title5 = snapshot.child('/small5/body2').val();
			      var small5Title6 = snapshot.child('/small5/lat').val();
			 	  var small5Title7 = snapshot.child('/small5/long').val();
			      var small5Title8 = snapshot.child('/small5/localName').val();
			 	  var small5Title9 = snapshot.child('/small5/localAbout').val();
			 	  var small5Title10 = snapshot.child('/small5/localUID').val();
			      document.getElementById('small5Title1In').value = small5Title1;
			      document.getElementById('small5Title2In').value = small5Title2;
			      document.getElementById('small5Title3In').value = small5Title3;
			      document.getElementById('small5Title4In').value = small5Title4;
			      document.getElementById('small5Title5In').value = small5Title5;
			      document.getElementById('small5Title6In').value = small5Title6;
			      document.getElementById('small5Title7In').value = small5Title7;
			      document.getElementById('small5NameIn').value = small5Title8;
			      document.getElementById('small5AboutIn').value = small5Title9;
			      document.getElementById('small5UIDIn').value = small5Title10;
  		  });
			
		  var lrgFileButton = document.getElementById("lrgFileButton");
		  var lrgFileButton2 = document.getElementById("lrgFileButton2");
		  var lrgFileButton3 = document.getElementById("lrgFileButton3");
		  var sml1FileButton = document.getElementById("sml1FileButton");
		  var sml1FileButton2 = document.getElementById("sml1FileButton2");
		  var sml2FileButton = document.getElementById("sml2FileButton");
		  var sml2FileButton2 = document.getElementById("sml2FileButton2");
		  var sml3FileButton = document.getElementById("sml3FileButton");
		  var sml3FileButton2 = document.getElementById("sml3FileButton2");
		  var sml4FileButton = document.getElementById("sml4FileButton");
		  var sml4FileButton2 = document.getElementById("sml4FileButton2");
		  var sml5FileButton = document.getElementById("sml5FileButton");
		  var sml5FileButton2 = document.getElementById("sml5FileButton2");
			
		
          lrgFileButton.addEventListener('change', function(e){
              var file = e.target.files[0];
              var storageRef = firebase.storage().ref("large");
              storageRef.put(file);
          });
			
		  lrgFileButton2.addEventListener('change', function(e){
              var file = e.target.files[0];
              var storageRef = firebase.storage().ref("large2");
              storageRef.put(file);
          });
			
		  lrgFileButton3.addEventListener('change', function(e){
              var file = e.target.files[0];
              var storageRef = firebase.storage().ref("large3");
              storageRef.put(file);
          });
			
		  sml1FileButton.addEventListener('change', function(e){
              var file = e.target.files[0];
              var storageRef = firebase.storage().ref("small1");
              storageRef.put(file);
          });
			
		  sml1FileButton2.addEventListener('change', function(e){
              var file = e.target.files[0];
              var storageRef = firebase.storage().ref("small12");
              storageRef.put(file);
          });
			
		  sml2FileButton.addEventListener('change', function(e){
              var file = e.target.files[0];
              var storageRef = firebase.storage().ref("small2");
              storageRef.put(file);
          });
			
		  sml2FileButton2.addEventListener('change', function(e){
              var file = e.target.files[0];
              var storageRef = firebase.storage().ref("small22");
              storageRef.put(file);
          });
			
		  sml3FileButton.addEventListener('change', function(e){
              var file = e.target.files[0];
              var storageRef = firebase.storage().ref("small3");
              storageRef.put(file);
          });
			
		  sml3FileButton2.addEventListener('change', function(e){
              var file = e.target.files[0];
              var storageRef = firebase.storage().ref("small32");
              storageRef.put(file);
          });
			
		  sml4FileButton.addEventListener('change', function(e){
              var file = e.target.files[0];
              var storageRef = firebase.storage().ref("small4");
              storageRef.put(file);
          });
			
		  sml4FileButton2.addEventListener('change', function(e){
              var file = e.target.files[0];
              var storageRef = firebase.storage().ref("small42");
              storageRef.put(file);
          });
			
		  sml5FileButton.addEventListener('change', function(e){
              var file = e.target.files[0];
              var storageRef = firebase.storage().ref("small5");
              storageRef.put(file);
          });
			
		  sml5FileButton2.addEventListener('change', function(e){
              var file = e.target.files[0];
              var storageRef = firebase.storage().ref("small52");
              storageRef.put(file);
          });
			
          // [START_EXCLUDE silent]
		  document.getElementById('signButton').textContent = 'sign out';
			
          // [END_EXCLUDE]
        } else {
          // [END_EXCLUDE]
			window.location.replace("https://app.jaunt-app.co.uk/");
        }
      });
      // [END authstatelistener]
	  document.getElementById('signButton').addEventListener('click', toggleSignIn, false);
	  document.getElementById('saveButton').addEventListener('click', save, true);
	}

	function upload() {
		const file = $('#photo').get(0).files[0];
	}

	function save() {
	    var xploreLargeRef = firebase.database().ref('Admin/xplore/large');
		var xploreSmall1Ref = firebase.database().ref('Admin/xplore/small1');
		var xploreSmall2Ref = firebase.database().ref('Admin/xplore/small2');
		var xploreSmall3Ref = firebase.database().ref('Admin/xplore/small3');
		var xploreSmall4Ref = firebase.database().ref('Admin/xplore/small4');
		var xploreSmall5Ref = firebase.database().ref('Admin/xplore/small5');
	    
	    var pushRef = xploreLargeRef.push(); 
	    var lt1 = document.getElementById('largeTitle1In').value;
	    var lt2 = document.getElementById('largeTitle2In').value;
	    var lt3 = document.getElementById('largeTitle3In').value;
	    var lt4 = document.getElementById('largeTitle4In').value;
	    var lt5 = document.getElementById('largeTitle5In').value;
	    var lt6 = document.getElementById('largeTitle6In').value;
	    var lt7 = document.getElementById('largeTitle7In').value;
	    var lt8 = document.getElementById('largeNameIn').value;
	    var lt9 = document.getElementById('largeAboutIn').value;
	    var lt10 = document.getElementById('largeUIDIn').value;
		
		var s1t1 = document.getElementById('small1Title1In').value;
	    var s1t2 = document.getElementById('small1Title2In').value;
	    var s1t3 = document.getElementById('small1Title3In').value;
	    var s1t4 = document.getElementById('small1Title4In').value;
	    var s1t5 = document.getElementById('small1Title5In').value;
	    var s1t6 = document.getElementById('small1Title6In').value;
	    var s1t7 = document.getElementById('small1Title7In').value;
	    var s1t8 = document.getElementById('small1NameIn').value;
	    var s1t9 = document.getElementById('small1AboutIn').value;
	    var s1t10 = document.getElementById('small1UIDIn').value;
		
		var s2t1 = document.getElementById('small2Title1In').value;
	    var s2t2 = document.getElementById('small2Title2In').value;
	    var s2t3 = document.getElementById('small2Title3In').value;
	    var s2t4 = document.getElementById('small2Title4In').value;
	    var s2t5 = document.getElementById('small2Title5In').value;
	    var s2t6 = document.getElementById('small2Title6In').value;
	    var s2t7 = document.getElementById('small2Title7In').value;
		var s2t8 = document.getElementById('small2NameIn').value;
	    var s2t9 = document.getElementById('small2AboutIn').value;
	    var s2t10 = document.getElementById('small2UIDIn').value;
		
		var s3t1 = document.getElementById('small3Title1In').value;
	    var s3t2 = document.getElementById('small3Title2In').value;
	    var s3t3 = document.getElementById('small3Title3In').value;
	    var s3t4 = document.getElementById('small3Title4In').value;
	    var s3t5 = document.getElementById('small3Title5In').value;
	    var s3t6 = document.getElementById('small3Title6In').value;
	    var s3t7 = document.getElementById('small3Title7In').value;
		var s3t8 = document.getElementById('small3NameIn').value;
	    var s3t9 = document.getElementById('small3AboutIn').value;
	    var s3t10 = document.getElementById('small3UIDIn').value;
		
		var s4t1 = document.getElementById('small4Title1In').value;
	    var s4t2 = document.getElementById('small4Title2In').value;
	    var s4t3 = document.getElementById('small4Title3In').value;
	    var s4t4 = document.getElementById('small4Title4In').value;
	    var s4t5 = document.getElementById('small4Title5In').value;
	    var s4t6 = document.getElementById('small4Title6In').value;
	    var s4t7 = document.getElementById('small4Title7In').value;
		var s4t8 = document.getElementById('small4NameIn').value;
	    var s4t9 = document.getElementById('small4AboutIn').value;
	    var s4t10 = document.getElementById('small4UIDIn').value;
		
		var s5t1 = document.getElementById('small5Title1In').value;
	    var s5t2 = document.getElementById('small5Title2In').value;
	    var s5t3 = document.getElementById('small5Title3In').value;
	    var s5t4 = document.getElementById('small5Title4In').value;
	    var s5t5 = document.getElementById('small5Title5In').value;
	    var s5t6 = document.getElementById('small5Title6In').value;
	    var s5t7 = document.getElementById('small5Title7In').value;
		var s5t8 = document.getElementById('small5NameIn').value;
	    var s5t9 = document.getElementById('small5AboutIn').value;
	    var s5t10 = document.getElementById('small5UIDIn').value;
	    
	    xploreLargeRef.set({
	  	  title1 : lt1,
	  	  title2 : lt2,
	  	  title3 : lt3,
	  	  body1 : lt4,
	  	  body2 : lt5,
		  lat : lt6,
		  long : lt7,
		  localName : lt8,
		  localAbout : lt9,
		  localUID : lt10
	    });
		
		xploreSmall1Ref.set({
	  	  title1 : s1t1,
	  	  title2 : s1t2,
	  	  title3 : s1t3,
	  	  body1 : s1t4,
	  	  body2 : s1t5,
		  lat : s1t6,
		  long : s1t7,
		  localName : s1t8,
		  localAbout : s1t9,
		  localUID : s1t10
	    });
		
		xploreSmall2Ref.set({
	  	  title1 : s2t1,
	  	  title2 : s2t2,
	  	  title3 : s2t3,
	  	  body1 : s2t4,
	  	  body2 : s2t5,
		  lat : s2t6,
		  long : s2t7,
		  localName : s2t8,
		  localAbout : s2t9,
		  localUID : s2t10
	    });
		
		xploreSmall3Ref.set({
	  	  title1 : s3t1,
	  	  title2 : s3t2,
	  	  title3 : s3t3,
	  	  body1 : s3t4,
	  	  body2 : s3t5,
		  lat : s3t6,
		  long : s3t7,
		  localName : s3t8,
		  localAbout : s3t9,
		  localUID : s3t10
	    });
		
		xploreSmall4Ref.set({
	  	  title1 : s4t1,
	  	  title2 : s4t2,
	  	  title3 : s4t3,
	  	  body1 : s4t4,
	  	  body2 : s4t5,
		  lat : s4t6,
		  long : s4t7,
		  localName : s4t8,
		  localAbout : s4t9,
		  localUID : s4t10
	    });
		
		xploreSmall5Ref.set({
	  	  title1 : s5t1,
	  	  title2 : s5t2,
	  	  title3 : s5t3,
	  	  body1 : s5t4,
	  	  body2 : s5t5,
		  lat : s5t6,
		  long : s5t7,
		  localName : s5t8,
		  localAbout : s5t9,
		  localUID : s5t10
	    });
	}
	  
    window.onload = function() {
      initApp();
    };
	  