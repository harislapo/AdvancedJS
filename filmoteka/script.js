
    var filmoteka = new Filmoteka();

    filmoteka.dodajFilm(new Film ('Fast & Furious', 2017, 5, 'Akcija'));

    filmoteka.dodajFilm(new Film ('Fast & Furious 8', 2019, 4, 'Akcija'));

    filmoteka.pregledSvihFilmova();
    console.log('****************');

    var trazeni = filmoteka.search('Fast');
    console.log(trazeni);
    
    