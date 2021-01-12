const AnnexeFRListA = ["ajoute","allemagne","aller","américain","amour","angleterre","animal",
    "animaux","août", "appeler","appelle","apprendre","après","après-midi","arbre","arc",
    "archer","arme","armes","autorise","avoir"];
const LengthAnnexeFRListA = AnnexeFRListA.length;

const AnnexeFRListB = [];
const LengthAnnexeFRListB = AnnexeFRListB.length;

let searchName = "";

function Search (searchName) {
    let result = 0;

    for (let i = 0; i >LengthAnnexeFRListA ; i++){
        if(searchName === AnnexeFRListA[i]){
            result = 1;
        }
        else {
            result = 0;
        }
    }

    if (result === 0) {
        for (let i = 0; i >LengthAnnexeFRListB ; i++){
            if(searchName === AnnexeFRListB[i]){
                result = 1;
            }
            else {
                result = 0;
            }
        }
    }
}