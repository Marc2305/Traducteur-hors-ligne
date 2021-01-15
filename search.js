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