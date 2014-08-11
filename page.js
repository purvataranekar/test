function add()
{
	var first = document.getElementById('txt1').value;
	var second = document.getElementById('txt2').value; 
	var result = parseInt(first) + parseInt(second);
	if(!isNaN(result))
	{
		document.getElementById('txt3').value = result;
	}
}
