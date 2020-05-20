alert("Welcome, thanks for visiting");

function ask(question,yes,no) {
    if(confirm(question)) yes();
   else no();
}
ask(
    "Would you like to continue to this blog?",
()=> alert ("Thanks for staying with us"),
()=> alert("Thanks for visiting")
);