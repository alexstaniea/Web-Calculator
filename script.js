function number(val) {	
	var var1=document.getElementById("numbers").textContent;
	if(var1.length<12)
	document.getElementById("numbers").innerHTML=
	document.getElementById("numbers").innerHTML+val;
}


function clr() {
	document.getElementById("numbers").innerHTML="";
}


function op() {
	var input=document.getElementById("numbers").textContent;
	clr();
	console.log(input);


	var numbers=[];
	var nr='';
	var signs=[];
	var result=0;
	var index=0;

	var i,k;

	for(i=0;i<input.length;i++)
	{
		if(input[i]!=='+' && input[i]!=='-' && input[i]!=='*' && input[i]!=='/')
			nr=nr+input[i];
		else
		{
			numbers.push(Number(nr));
			signs.push(input[i]);
			nr='';
		}

	}

	numbers.push(Number(nr));

	result=numbers[0];

	for(i=1;i<numbers.length;i++)
	{
		if(signs[i-1]==='+')
			result+=numbers[i];
		else if(signs[i-1]==='-')
			result-=numbers[i];
		else if(signs[i-1]==='*')
			result*=numbers[i];
		else if(signs[i-1]==='/')
			result/=numbers[i];	
	}


	clr();
	document.getElementById("numbers").innerHTML=result.toFixed(3);
	
}


