const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// servir les fichiers statiques (public)
app.use(express.static(path.join(__dirname, '..', 'public')));


// simple endpoint de contact (placeholder)
app.post('/api/contact', (req, res) => {
const { name, email, message } = req.body;
console.log('Nouveau message contact:', { name, email, message });
// Ici tu peux ajouter nodemailer ou sauvegarder en base
res.json({ ok: true, message: 'Message reçu' });
});


app.listen(PORT, () => console.log(`Serveur démarré : http://localhost:${PORT}`));