let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("message");
let send = document.getElementById("send");

let name_p = document.getElementById("name_p");
let email_p = document.getElementById("email_p");
let pwrd_p = document.getElementById("pwrd_p");

let validName = false;
let validEmail = false;
let validPassword = false;

name.addEventListener("input", 
    (event) => 
    {
        if(event.target.value != '')
        {
            validName = true;
            name_p.style.display = "none";
        } 
        else
        {
            validName = false;
            name_p.style.display = "block";
        }
        send_enable();   

    });

email.addEventListener("input", 
    (event) => {
            const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            validEmail = regex.test(event.target.value);
            if(validEmail)
            {
                email_p.style.display = "none";
            }
            else
            {
                email_p.style.display = "block";
            }
            send_enable();
    }
);

password.addEventListener("input", 
    (event) => {
        let p_value = event.target.value;
        if(p_value.length >= 6)
        {
            validPassword = true;
            pwrd_p.style.display = "none";
        }
        else
        {
            validPassword = false;
            pwrd_p.style.display = "block";
        }
        send_enable();
    }
)

send.addEventListener("click", () =>
{
    alert("Message sent Successfully")
})

function send_enable()
{
    if (validEmail && validName && validPassword)
    {
        send.classList.remove("bg-gray-400", "opacity-50", "cursor-not-allowed");
    }
    else
    {
        send.classList.add("bg-gray-400", "opacity-50", "cursor-not-allowed");
    }
}

