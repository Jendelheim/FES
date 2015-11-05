
function arrayByTeamName(name, stats){
        for(var i = 0; i < stats.length; i++){
                if(stats[i][1] === name){
                        return stats[i];
                }
        }
}
 
var arsenalArray = arrayByTeamName("Arsenal", teamStats);


console.log(arsenalArray); 
