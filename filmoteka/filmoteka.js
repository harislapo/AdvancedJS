function Filmoteka(){

    this.sviFilmovi = [];

    this.dodajFilm = function(film){
        this.sviFilmovi.push(film);
    }

    this.pregledSvihFilmova = function() {
        for (let i = 0; i < this.sviFilmovi.length; i++) {
            console.log(this.sviFilmovi[i]);
        }
    }

    this.obrisiFilm = function(naslov) {
        for (let i = 0; i < this.sviFilmovi.length; i++) {
            if(this.sviFilmovi[i].naslov === naslov){
                this.sviFilmovi.splice(i, 1);
            }
        }
    }
    this.search = function(criteria) {
        var rez = [];
        for (let i = 0; i < this.sviFilmovi.length; i++) {
            if (this.sviFilmovi[i].naslov.indexOf(criteria) > -1){
                rez.push(this.sviFilmovi[i]);
            }
        }
        return rez;
    }
}