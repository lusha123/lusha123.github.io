﻿function __RP_Callback_Helper(str, strCallbackEvent, splitSize, func){var event = null;if (strCallbackEvent){event = document.createEvent('Events');event.initEvent(strCallbackEvent, true, true);}if (str && str.length > 0){var splitList = str.split('|');var strCompare = str;if (splitList.length == splitSize)strCompare = splitList[splitSize-1];var pluginList = document.plugins;for (var count = 0; count < pluginList.length; count++){var sSrc = '';if (pluginList[count] && pluginList[count].src)sSrc = pluginList[count].src;if (strCompare.length >= sSrc.length){if (strCompare.indexOf(sSrc) != -1){func(str, count, pluginList, splitList);break;}}}}if (strCallbackEvent)document.body.dispatchEvent(event);}function __RP_Coord_Callback(str){var func = function(str, index, pluginList, splitList){pluginList[index].__RP_Coord_Callback = str;pluginList[index].__RP_Coord_Callback_Left = splitList[0];pluginList[index].__RP_Coord_Callback_Top = splitList[1];pluginList[index].__RP_Coord_Callback_Right = splitList[2];pluginList[index].__RP_Coord_Callback_Bottom = splitList[3];};__RP_Callback_Helper(str, 'rp-js-coord-callback', 5, func);}function __RP_Url_Callback(str){var func = function(str, index, pluginList, splitList){pluginList[index].__RP_Url_Callback = str;pluginList[index].__RP_Url_Callback_Vid = splitList[0];pluginList[index].__RP_Url_Callback_Parent = splitList[1];};__RP_Callback_Helper(str, 'rp-js-url-callback', 3, func);}function __RP_TotalBytes_Callback(str){var func = function(str, index, pluginList, splitList){pluginList[index].__RP_TotalBytes_Callback = str;pluginList[index].__RP_TotalBytes_Callback_Bytes = splitList[0];};__RP_Callback_Helper(str, null, 2, func);}function __RP_Connection_Callback(str){var func = function(str, index, pluginList, splitList){pluginList[index].__RP_Connection_Callback = str;pluginList[index].__RP_Connection_Callback_Url = splitList[0];};__RP_Callback_Helper(str, null, 2, func);}

function menuFix() {

    var sfEls = document.getElementById("nav").getElementsByTagName("li");

    for (var i=0; i<sfEls.length; i++) {

        sfEls[i].onmouseover=function() {

        this.className+=(this.className.length>0? " ": "") + "sfhover";

        }

        sfEls[i].onMouseDown=function() {

        this.className+=(this.className.length>0? " ": "") + "sfhover";

        }

        sfEls[i].onMouseUp=function() {

        this.className+=(this.className.length>0? " ": "") + "sfhover";

        }

        sfEls[i].onmouseout=function() {

        this.className=this.className.replace(new RegExp("( ?|^)sfhover\\b"), 

"");

        }

    }

}

var myIncludeHtmls = new Array();
myIncludeHtmls['header.html'] = '\
<table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" width="100%">\
\
    <tbody>\
\
      <tr> \
\
        <td width="18%" height="110" rowspan="2" align="center"><img src="/image/tvlogo.jpg" width="145" height="104"></td>\
\
        <td width="61%" rowspan="2" align="center"><img src="/image/logo_words.jpg" width="308" height="104"></td>\
\
        <td width="18%" height="90" align="right" valign="bottom"><div>\
\
          <p><span class="c1">5064 Franklin Drive</span> <span class="c1"></span></p>\
		   <p><span class="c1">Pleasanton, CA 94588 </span> <span class="c1"></span></p>\
\         <p><span class="c1">(925) 467-1580 </span></p>\
          <p><span class="c1"><a href="mailto:ccictv@yahoo.com">ccictv@ccictv.org</a></span></p>\
\
         </div></td>\
\
        <td width="3%" rowspan="2" align="right">&nbsp;</td>\
\
      </tr>\
\
      <tr>\
\
        <td align="right" valign="bottom">&nbsp;</td>\
\
      </tr>\
\
      <tr> \
\
        <td height="30" colspan="4" align="right" valign="top" bgcolor="#728740"\
\
		\
\
		class="A1">\
\
        \
\
 <div style="float:right;">\
<UL id=nav>\
<LI style="MARGIN-LEFT: 50px"><A href="/index.html" title="Chinese Church in Christ - Tri Valley">首 页</A></LI>\
\
<LI><A href="/ccictv-introduction.html" title="三谷基督徒會堂 會堂簡介 Chinese Church in Christ Tri-Valley Church Introduction">會堂簡介</A>\
  <UL>\
  <LI><A href="/ccictv-intro/01_belief.html" title="三谷基督徒會堂 信仰 Chinese Church in Christ Tri-Valley Belief">信仰與使命</A></LI>\
    <LI><A href="/ccictv-intro/02_leaders.html" title="ccictv-introduction_leaders">教牧同工</A></LI>\
    <LI><A href="/ccictv-intro/04_newsletters.html" title="三谷基督徒會堂 三谷恩泉 Chinese Church in Christ Church Newsletters">教會簡訊</A></LI>\
</UL>\
</LI>\
 \
<LI><A href="/ccictv-sunday.html" title="三谷基督徒會堂 主日聚會  Chinese Church in Christ Sunday">主日聚會</A>\
<UL>\
<LI><A href="/ccictv-sunday/01_sermons/sermon_2013.html" title="ccictv-churchlife_sermons_2013">主日信息</A></LI>\
<LI><A href="/ccictv-sunday/02_sundayschool.html" title="ccictv-churchlife_sundayschool">成人主日學</A></LI></UL></LI>\
\
<LI><A href="/ccictv-homegroups.html" title="三谷基督徒會堂 家庭團契 Chinese Church in Christ Homegroups">團契小組</A></LI>\
\
<LI><A href="#">靈修資源</A>\
<UL>\
<LI><A href="/ccictv-devotions/01_websites.html" title="ccictv-churchlife_devotions">網上靈修資源</A></LI>\
<LI><A href="/ccictv-devotions/02_library.html" title="ccictv-churchlife_devotions">圖書館</A></LI>\
<LI><A href="/ccictv-devotions/03_devotions.html" title="ccictv-churchlife_devotions">每日靈修</A></LI>\
</UL>\
</LI>\
\
<LI><A href="#">教會事工</A>\
<UL>\
  <LI><A href="/ccictv-ministry/01_youth.html" title="ccictv-youth_impact">青少年事工</A></LI>\
  <LI><A href="#">兒童事工</A>\
     <UL>\
                <LI><A href="/ccictv-ministry/02_children/SundayService.html" title="ccictv-children_SundayService">兒童主日</A></LI>\
                <LI><A href="/ccictv-ministry/02_children/Awana.html" title="cictv-children_awana">Awana</A></LI>\
    </UL>\
	</LI>\
  <LI><A href="/ccictv-ministry/03_mission.html" title="ccictv-mission">宣教与福音</A>\
  <UL>\
                <LI><A href="/ccictv-ministry/03_mission/Mission_Germany.html" title="Mission_Germany">德東宣教工廠</A></LI>\
</UL>\
</LI>\
</UL>\
</LI>\
\
<LI><A href="#">教會活動</A>\
  <UL>\
  <LI><A href="/ccictv_activities/01_calendar.html" title="ccictv-churhlife_calendar">年度行事曆</A></LI>\
  <LI><A href="/ccictv_activities/02_pictures.html" title="三谷基督徒會堂 生活剪影">生活剪影</A></LI>\
  <LI><A href="/ccictv_activities/03_specialtopics.html" title="三谷基督徒會堂 專題講座 Chinese Church in Christ Church Special Sermons">特別聚會</A></LI>\
 </UL></LI>\
 \
<LI><A href="" title="">&nbsp;</A></LI>\
</UL>\
\
</div>\
</td>\
\
      </tr>\
\
    </tbody>\
\
  </table>';

myIncludeHtmls['footer.html'] = '\
\
 <div style="clear:both;background-image: url(images/COD_FooterBg.gif); background-repeat: no-repeat; background-position: left top;margin-top:15px">\
\
    <p><span class="c1">Copyright 2013, Chinese Church in Christ - Tri Valley,\
\
      Pleasanton, California, USA. All rights reserved. </span><br>\
\
    </p>\
\
</div>';

// CREDITS:
// Snowmaker Copyright (c) 2003 Peter Gehrig. All rights reserved.
// Distributed by Hypergurl
// Permission given to use the script provided that this notice remains as is.

// Set the number of snowflakes (more than 30 - 40 not recommended)
var snowmax=35

// Set the colors for the snow. Add as many colors as you like
var snowcolor=new Array("#aaaacc","#ddddFF","#ccccDD")

// Set the fonts, that create the snowflakes. Add as many fonts as you like
var snowtype=new Array("Arial Black","Arial Narrow","Times","Comic Sans MS")

// Set the letter that creates your snowflake (recommended:*)
var snowletter="*"

// Set the speed of sinking (recommended values range from 0.3 to 2)
var sinkspeed=0.6

// Set the maximal-size of your snowflaxes
var snowmaxsize=22

// Set the minimal-size of your snowflaxes
var snowminsize=8

// Set the snowing-zone
// Set 1 for all-over-snowing, set 2 for left-side-snowing 
// Set 3 for center-snowing, set 4 for right-side-snowing
var snowingzone=1

///////////////////////////////////////////////////////////////////////////
// CONFIGURATION ENDS HERE
///////////////////////////////////////////////////////////////////////////


// Do not edit below this line
var snow=new Array()
var marginbottom
var marginright
var timer
var i_snow=0
var x_mv=new Array();
var crds=new Array();
var lftrght=new Array();
var browserinfos=navigator.userAgent 
var ie5=document.all&&document.getElementById&&!browserinfos.match(/Opera/)
var ns6=document.getElementById&&!document.all
var opera=browserinfos.match(/Opera/)  
var browserok=ie5||ns6||opera

function randommaker(range) {		
	rand=Math.floor(range*Math.random())
    return rand
}

function initsnow() {
	if (ie5 || opera) {
		marginbottom = document.body.clientHeight
		marginright = document.body.clientWidth
	}
	else if (ns6) {
		marginbottom = window.innerHeight
		marginright = window.innerWidth
	}
	var snowsizerange=snowmaxsize-snowminsize
	for (i=0;i<=snowmax;i++) {
		crds[i] = 0;                      
    	lftrght[i] = Math.random()*15;         
    	x_mv[i] = 0.03 + Math.random()/10;
		snow[i]=document.getElementById("s"+i)
		snow[i].style.fontFamily=snowtype[randommaker(snowtype.length)]
		snow[i].size=randommaker(snowsizerange)+snowminsize
		snow[i].style.fontSize=snow[i].size
		snow[i].style.color=snowcolor[randommaker(snowcolor.length)]
		snow[i].sink=sinkspeed*snow[i].size/5
		if (snowingzone==1) {snow[i].posx=randommaker(marginright-snow[i].size)}
		if (snowingzone==2) {snow[i].posx=randommaker(marginright/2-snow[i].size)}
		if (snowingzone==3) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/4}
		if (snowingzone==4) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/2}
		snow[i].posy=randommaker(6*marginbottom-marginbottom-6*snow[i].size)
		snow[i].style.left=snow[i].posx
		snow[i].style.top=snow[i].posy
	}
	movesnow()
}

function movesnow() {
	for (i=0;i<=snowmax;i++) {
		crds[i] += x_mv[i];
		snow[i].posy+=snow[i].sink
		snow[i].style.left=snow[i].posx+lftrght[i]*Math.sin(crds[i]);
		snow[i].style.top=snow[i].posy
		
		if (snow[i].posy>=marginbottom-6*snow[i].size || parseInt(snow[i].style.left)>(marginright-3*lftrght[i])){
			if (snowingzone==1) {snow[i].posx=randommaker(marginright-snow[i].size)}
			if (snowingzone==2) {snow[i].posx=randommaker(marginright/2-snow[i].size)}
			if (snowingzone==3) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/4}
			if (snowingzone==4) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/2}
			snow[i].posy=0
		}
	}
	var timer=setTimeout("movesnow()",50)
}

for (i=0;i<=snowmax;i++) {
	document.write("<span id='s"+i+"' style='position:absolute;top:-"+snowmaxsize+"'>"+snowletter+"</span>")
}

function myOnLoadFun(browserOK) {
// replace header include
var myIncludeHtmlElement = document.getElementById('header.html');
if (myIncludeHtmlElement) {
	myIncludeHtmlElement.innerHTML = myIncludeHtmls['header.html'];
}

// replace footer include
myIncludeHtmlElement = document.getElementById('footer.html');
if (myIncludeHtmlElement) {
	myIncludeHtmlElement.innerHTML = myIncludeHtmls['footer.html'];
}

menuFix();

if (browserok) {
	initsnow();
}

}

window.onload=myOnLoadFun;
