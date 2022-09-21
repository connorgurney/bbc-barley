var LinkTrack = function ()
{
this.docLinks  = document.links;
this.location= location.pathname;
}
LinkTrack.prototype.updateHrefs = function ()
{
var currlink, hostname, protocol, linktext;
if (!(!document.getElementsByTagName && document.all))
{
for (var i=0; i<this.docLinks.length; i++)
{
currlink = this.docLinks[i];
hostname = currlink.hostname ? currlink.hostname.toLowerCase() : ""; 
protocol = currlink.protocol.toLowerCase();
linktext = currlink.innerText;
if (protocol == 'http:' && (hostname != 'bbc.co.uk' && hostname.indexOf('.bbc.co.uk') == -1))
{
currlink.href = this.getNewUrl(currlink.href);
if (document.all && currlink.innerText.toLowerCase() == currlink.href.toLowerCase()) currlink.innerText = linktext;
}
}
}
}
LinkTrack.prototype.getNewUrl = function (destination)
{
var newUrl = '/go';
newUrl += this.location;
newUrl += (newUrl.substr(newUrl.length-1) == '/')? 'ext/_auto/-/' : '/ext/_auto/-/';
newUrl += destination;
return newUrl;
}
var myC = new LinkTrack();
myC.updateHrefs();
