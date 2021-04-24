document.querySelector("#start_chat").addEventListener("click", (event) => {  
    const socket = io();

    const chat_help = document.getElementById("chathelp");
    chat_help.style.display = "none";

    const chat_in_support = document.getElementById("chart_in_support");
    chat_in_support.style.display = "block";

    const email = document.getElementById("email").value;
    const text = document.getElementById("text_help").value;

    socket.on("connect", () => {
        const params = {
            email,
            text,
        };

        socket.emit("client_first_access", params, (call, err) => {
            if(err){
                console.err(err);
            } else {
                console.log(call);
            }
        });
    });
});
