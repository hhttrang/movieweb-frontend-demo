var arr=[
		{
			id:"ADIDA1uw heiwhewiuhw eiw hiu hwe woeiwe weoiwe duh",
			name:"shoes for gym",
			view:4000000,
			image:"hinh/3.jpg",
			detail:'hinh/start.png,hinh/start.png,hinh/start.png,hinh/start.png,hinh/start.png' ,	
		},
		{
			id:"AEYFSDD",
			name:"bra",
			view:1000000,
			image:"hinh/a.jpg",
			detail:'hinh/start.png,hinh/start.png,hinh/start.png,hinh/start.png,hinh/start.png' ,	
		},
		{
			id:"AEYFSDD",
			name:"shoes for running",
			view:41000000,
			image:"hinh/111.png",
			detail:'hinh/start.png,hinh/start.png,hinh/start.png,hinh/start.png,hinh/start.png' ,		
		},
		{
			id:"AEYFSDD",
			name:"shoes for running",
			view:41000000,
			image:"hinh/111.png",
			detail:'hinh/start.png,hinh/start.png,hinh/start.png,hinh/start.png,hinh/start.png' ,	
		},
	];
function getDetail(){
	 var img=document.getElementById("hinh");
	 var p=document.getElementById("detail");
	 img.src 
	} 
		 
function add(i){
	var c=window.localStorage.getItem("tong");
	c++;
	window.localStorage.setItem(c,arr[i].id+","+arr[i].name+","+arr[i].price+","+arr[i].image+",1");
	window.localStorage.setItem("tong",c++);
}
function congdon(){
}