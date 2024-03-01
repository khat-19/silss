
var country_arr = new Array("WAU", "WARD","East Region");
var s_a = new Array();
s_a[0]="Lumley|Aberdeen|Wilbweforce|No2|Morray Town|Central|Ferry Junction";
s_a[1]="Lumley|Aberdeen|Wilbweforce|No2|Morray Town|Central|Ferry Junction";
s_a[2]="Lumley|Aberdeen|Wilbweforce|No2|Morray Town|Central|Ferry Junction";
s_a[3]="Lumley|Aberdeen|Wilbweforce|No2|Morray Town|Central|Ferry Junction";
function print_country(country_id){
	// given the id of the <select> tag as function argument, it inserts <option> tags
	var option_str = document.getElementById(country_id);
	option_str.length=0;
	option_str.options[0] = new Option('Select Region','');
	option_str.selectedIndex = 0;
	for (var i=0; i<country_arr.length; i++) {
		option_str.options[option_str.length] = new Option(country_arr[i],country_arr[i]);
	}
}

function print_state(state_id, state_index){
	var option_str = document.getElementById(state_id);
	option_str.length=0;
	option_str.options[0] = new Option('Select District','');
	option_str.selectedIndex = 0;
	var state_arr = s_a[state_index].split("|");
	for (var i=0; i<state_arr.length; i++) {
		option_str.options[option_str.length] = new Option(state_arr[i],state_arr[i]);
	}
}
