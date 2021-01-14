const AnnexeFRListA = ["ajoute","allemagne","aller","américain","amour","angleterre","animal",
    "animaux","août", "appeler","appelle","apprendre","après","après-midi","arbre","arc",
    "archer","arme","armes","autorise","avoir"];
const LengthAnnexeFRListA = AnnexeFRListA.length;


const AnnexeFRListB = ["banque","bateau","bière","bilingue","billet","blanc","blanche",
    "blanches","blouson","boit","bouteille","bureau","bus"];
const LengthAnnexeFRListB = AnnexeFRListB.length;


const AnnexeFRListC = ["café","calendrier","canard","capitaine","chante","chaussure",
"chaussures","chemise","cheval","chiens","chinois","cible","cibles","cinéma","citron",
"cloche","costume","coupe","court","couteau","cuisine"];
const LengthAnnexeFRListC = AnnexeFRListC.length;


const AnnexeFRListD = ["demain","désolé","déteste","dimanche","disponible","dix-sept",
    "document","documents","dois","dormes","dort","douze","drapeau"];
const LengthAnnexeFRListD = AnnexeFRListD.length;


const AnnexeFRListE = ["écrire","écris","écrivain","efficace","église","églises",
    "éléphant", "élèves", "elle", "enfant", "entre", "essayer", "étude", "européen",
    "exemple", "explication"];
const LengthAnnexeFRListE = AnnexeFRListE.length;


let searchName = "";

function Search (searchName) {
    let result = 0;
    let iIndex = 0;

    for (iIndex = 0; i >LengthAnnexeFRListA ; i++){
        if(searchName === AnnexeFRListA[i]){
            result = 1;
            return(
                AnnexeFRListA
            )
        }
        else {
            result = 0;
        }
    }

    if (result === 0) {
        for (iIndex = 0; i >LengthAnnexeFRListB ; i++){
            if(searchName === AnnexeFRListB[i]){
                result = 1;
                return(
                    AnnexeFRListB
                )
            }
            else {
                result = 0;
            }
        }
    }


    if (result === 0) {
        for (iIndex = 0; i >LengthAnnexeFRListC ; i++){
            if(searchName === AnnexeFRListC[i]){
                result = 1;
                return(
                    AnnexeFRListC
                )
            }
            else {
                result = 0;
            }
        }
    }

    if (result === 0) {
        for (iIndex = 0; i >LengthAnnexeFRListD ; i++){
            if(searchName === AnnexeFRListD[i]){
                result = 1;
                return(
                    AnnexeFRListD
                )
            }
            else {
                result = 0;
            }
        }
    }
}