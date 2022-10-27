$(window).on("load",onLoad);

function onLoad(){
 
    
    $.ajax({
        
        url:"data/data.json",
        dataType:"JSON",
        success:function(data){
            
        console.log(data);
            
        },
        error:function(){
            
            console.log("error");
        }
        
    });
    
    
    
    
}