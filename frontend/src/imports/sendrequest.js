//const API_URL = "https://painel.academiagolfinhodourado.com.br/api";
const API_URL = "http://localhost:3001";

export const SendRequest = (path, method, data) => {
    return new Promise((res, err) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, API_URL + path, true);
        xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");

        xhr.onload = () => {
            if (xhr.status === 200) {
                res(JSON.parse(xhr.responseText));
            } else {
                err(xhr.statusText);
            }
        };
        console.log("Enviando dados");
        xhr.send(JSON.stringify(data));
    });
};
