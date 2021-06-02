function devolverUrl(nombre){
    datin:[]
     
    return  + nombre;
}
    
var obj = new Vue({

    el:'#listado',
    data:{
        datos:[]
    },
    created(){
        this.fetchData()
    },
    methods:{
        fetchData(){
            fetch('https://api.themoviedb.org/3/movie/popular?api_key=96978095764a446b2c0606e915f6e57b&language=en-US&page=1')
            .then(response => response.json())
            .then(data => {
                this.datos=data.results;
            })
            .finally(te => {
                for(var i=0;i<this.datos.length;i++){
                    this.datos[i].poster_path="https://image.tmdb.org/t/p/original"+this.datos[i].poster_path
                }
            })
        }       
    }
})