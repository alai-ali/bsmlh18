s2.src='https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js';
s2.onload=function(){
  var s3=document.createElement('script');
  s3.src='https://www.gstatic.com/firebasejs/9.23.0/firebase-database-compat.js';
  s3.onload=function(){
    if(!firebase.apps.length){
      firebase.initializeApp({
        apiKey:'AIzaSyBlD8lNdYdubHXr13IhPkmkCnNQQLChtVA',
        authDomain:'bsmlh-chat.firebaseapp.com',
        databaseURL:'https://bsmlh-chat-default-rtdb.firebaseio.com',
        projectId:'bsmlh-chat',
        storageBucket:'bsmlh-chat.firebasestorage.app',
        messagingSenderId:'41774666354',
        appId:'1:41774666354:web:e200d57a0bab89e26be8eb'
      });
    }
    setTimeout(initJobsDB, 500);
  };
  document.head.appendChild(s3);
};
