/*
   New Perspectives on HTML, CSS, and JavaScript
   Tutorial 12
   Case Problem 2

   Author:   Matt Kordick
   Date:    12/10/16

   Filename: barchart.js

   Function List:

   totalVotes(votes)
      Returns the length of the items in the votes array

   calcPercent(item, sum)
      Returns the ratio item/sum expressed as a percent rounded to
      the nearest integer

   createBar(partyType, percent)
      Displays a horizontal bar chart with different bars for different
      party types, using the value of the percent parameter to determine
      the length of the bar

   showResults(race, name, party, votes)
      Shows the race results for each name and party with bar charts created
      based on the votes array
*/
function totalVotes(votes){
    var total = 0;
    for( var i = 0; i < votes.length ; i++){
      total = total + votes[i];

    }
    return total;
}
function calcPrecent(item, sum){
  return Math.round(item/sum*100);
}
function createBar(partyType,percent)
{
    alert("partyType:" + partyType);
    alert("percent:" + percent);

    var barText;

    switch(partyType){
        case "D":
            barText="<td class='dem'></td>";
            break;
        case "R":
            barText="<td class='rep'></td>";
            break;
        case "I":
            barText="<td class='ind'></td>";
            break;
        case "G":
           barText="<td class='green'></td>";
           break;
        case "L":
           barText="<td class='lib'></td>";
           break;
        default: document.write("hi");
    } // end of switch

    alert("barText:" + barText);

    for(var i=1; i<percent; i++){
        document.write(barText);
    }
}
 function showResults(race, name, party, votes){
   var totalv = totalVotes(votes);
    document.write(<h2>race</h2>);
    document.write(<table>);
     document.write(<tr>);
       document.write(<th>Candidate</th>);
       document.write(<th class='num'>Votes</th>);
       document.write(<th class='num'>%</th>);
    </tr>
    for(var i = 0; i < name.length; i++){
      document.write(<tr>);
      document.write(<td>name (party)</td>);
      document.write(<td class='num' >votes</td>);
      var percent = calcPercent(votes, totalV);
      document.write(<td clas='num'>(percent%)</td>);
      createBar(party[], percent);
      document.write(</tr>);
    }
  document.write(</table>);
 }
