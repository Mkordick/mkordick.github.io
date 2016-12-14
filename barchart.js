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
function totalVotes(votes) {
   		var total=0;
		for (var i=0; i<votes.length; i++) total+=votes[i];
		return total;
		}

		function calcPercent(item, sum) {
			return Math.round(100*item/sum);
		}

		function createBar(partyType, percent) {
		switch (partyType) {
		 	case"D": barText="<td class='dem'> </td>";break;
			case"R": barText="<td class='rep'> </td>";break;
			case"I": barText="<td class='ind'> </td>";break;
			case"G": barText="<td class='green'> </td>";break;
		}
		 for (var j=1; j<=percent; j++) {
			 document.write(barText);
		 }
		}

		function showResults(race, name, party, votes) {
			var totalV=totalVotes(votes);
			document.write("<h2>"+race+" "+totalV+" votes</h2>");
			document.write("<table cellspacing='0'>");
			document.write("<tr><th>Candidate</th><th class='num'>Votes</th><th class='num'>%</th></tr>");
			for (var i=0; i<name.length; i++) {
			document.write ("<tr>");
			document.write("<td>"+name+[i]+" ("+party[i]+")</td>");
			document.write("<td class='num'> "+votes[i]+",</td>");

			var percent = calcPercent(votes[i], totalV);
			document.write("<td class='num'> ("+percent+"%)</td>");

			createBar(party[i], percent);

			document.write("</tr>");

			}
			document.write("</table>");
		}
