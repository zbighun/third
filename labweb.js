var select= document.getElementById("Day");

for(var i=1;i<=31;i++)
{
var option= document.createElement("option");
option.value=i;
option.innerHTML = i;
select.appendChild(option);
}
select= document.getElementById("Month");

for(var i=1;i<=12;i++)
{
var option= document.createElement("option");
option.value=i;
option.innerHTML = i;
select.appendChild(option);
}
select= document.getElementById("Year");

for(var i=2017;i>=1900;i--)
{
var option= document.createElement("option");
option.value=i;
option.innerHTML = i;
select.appendChild(option);
}
function DateTester()
{
	var today = new Date();
	var bool = true;
	if (document.getElementById("Year").value == today.getFullYear())
	{
		if (document.getElementById("Month").value > today.getMonth()) bool = false;
		if (document.getElementById("Month").value == today.getMonth())
			if (document.getElementById("Day").value > today.getday()) bool = false;
	}
	return bool;
}
function Message()
{
	console.log("Your website is wrong!rewrite it");
}
function TestLink()
{
	var Site = document.getElementById("socialLink");
	var siteValue = Site.value;
	var res = siteValue.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
	if (res==0)
		return Message();
	else
		return true;
}
