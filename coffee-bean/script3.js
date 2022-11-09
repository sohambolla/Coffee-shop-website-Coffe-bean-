const forms= document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link");

const firebaseConfig = {
  apiKey: "AIzaSyA3wo30GoVNS79Pd4aOBtXBkdlaVoee2FE",
  authDomain: "login-da871.firebaseapp.com",
  projectId: "login-da871",
  storageBucket: "login-da871.appspot.com",
  messagingSenderId: "866225509849",
  appId: "1:866225509849:web:c09a1ddc2442f58358f5c8",
  measurementId: "G-1XGW81E9Z2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//signup function

function register() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);

    promise.catch(e=alert(e.message));
    alert("signup succcessfully");


}

/*function myFunction(){
    var x =document.getElementsByClassName("input");
    if (x.type === "password"){
        x.text= "text";
       }
    else{
        x.type="password";
    }
}*/

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        
        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide","bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show","bx-hide");
        })
    })
} )
function register(){
    var emal=document.forms.reg.emal.value;
    var pwd=document.forms.reg.pwd.value;

    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?w+)*(\.\w{2,3})+$/g;
    var regpassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

    if (emal=="" && pwd==""){
      window.alert("Please enter all the fields");
      document.reg.dob.focus();
      return false;
    }

    if (emal=="" ){
        window.alert("Please enter your Email Address");
        document.reg.emal.focus();
        return false;
    }


    if( !regEmail.test(emal)){
        window.alert("Please Enter valid Email Address Example: sohambolla01@gmail.com ");
        document.reg.emal.focus();
        return false;
    }

    if(pwd==""){
        window.alert("Please Enter Password");
        document.reg.pwd.focus();
        return false;
    }
    if(pwd.length<=7 || pwd.length>=15 || !regpassword.test(pwd)){
        window.alert("Please Enter having 7 and 15 cahracters which contains atleast one special character and atleast one digit ");
        document.reg.pwd.focus();
        return false;
    }
}

