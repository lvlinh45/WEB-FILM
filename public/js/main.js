
const endpoint = "https://phimapi.com/danh-sach/phim-moi-cap-nhat";

async function getData() {
    const response = await fetch(endpoint);
    const data = await response.json();
    console.log(data);
}
getData()