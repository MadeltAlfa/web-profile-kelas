const express = require('express');
const app = express();
const path = require('path');

// Menyajikan file statis dari folder 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.listen(5000, () => {
    console.log("Server berjalan di http://localhost:5000");
});
