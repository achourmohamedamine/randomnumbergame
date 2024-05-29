document.getElementById("button1").addEventListener("click", jouer);
function jouer(){
       let difficulté= prompt("choisissez le niveau de difficulté");
       switch (difficulté){
        case "Facile":
            jouerniveau(0,40,10);
            break;
        case "Intermédiare":
            jouerniveau(0,70,8);
            break;
        case "Difficile":
            jouerniveau(0,100,5);
            break;
            
                
       

                
            
           

            
            
       }
    }
function jouerniveau(min,max,nbretentatives){
    
            
            let nbrecaché=Math.floor(Math.random()*(max-min+1))+min;
            for (let i=nbretentatives;i>=1;i--){
               let reponse= prompt("vous avez "+i+" tentatives Choisisser un nombre entre"+min+ "et "+ max);
               if (reponse==nbrecaché){
                alert("Felicitations Vous avez gagné");
                rejouer();
                return;
               }
               if (reponse.trim()==""){
               alert("Veuiller entrer un nombre");
               i++;
               continue;}
               if (reponse==null){
                break;
                
               }
               else {
                alert("nbre incorrect");
               }
                if (i==1){
                alert("Vous avez echoué");
                rejouer();}}

}
function rejouer(){
    var again =confirm("Voulez Vous Rejouer?");
                if (again){
                    jouer();
                }


}