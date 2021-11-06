var names = new Array();
names[0]="Exo";
names[1]="Exol";
names[2]="dee";
names[3]="jongin";
names[4]="Jd";
names[5]="Junmyeon";
names[6]="jongdae";
names[7]="Xiumin";
names[8]="Lay";
names[9]="baekhyun";
names[10]="Loey";
names[11]="D.O.";
names[12]="Sehun";

for (var i=0;i<names.length;i++){
	if (names[i].charAt(0)==='J' || names[i].charAt(0)==='j'){
		console.log("Goodbye " + names[i]);
	}
	else{
		console.log("Hello "+ names[i])
	}
}