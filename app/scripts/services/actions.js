/*************************************************************************************
Actions in angularjs app and manage info from differents formats and file structures
*************************************************************************************/
function convertToArrayFromCSV(csv_str)
{
	var lines = [];
	// split content based on new line
    var allTextLines = csv_str.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    
    for ( var i = 0; i < allTextLines.length; i++) {
      // split content based on comma
      var data = allTextLines[i].split(',');
      if (data.length == headers.length) {
        var tarr = [];
        for ( var j = 0; j < headers.length; j++) {
          tarr.push(data[j]);
        }
        lines.push(tarr);
      }
    }
	return lines;
}

function convertWikipediaFriendlySearchTerm(text)
{
	text = text.split(' (Tie)').join('');
	return (text.split(' ').join('_'));
}