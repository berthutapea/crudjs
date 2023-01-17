//Create Data
function createData() {
    let data = {
        nama: namaV.value,
        nohp: nohpV.value
    };
    database.ref("bukutelepon").push(data);
    namaV.value = "";
    nohpV.value = "";
}
