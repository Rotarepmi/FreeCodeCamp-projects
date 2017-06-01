$("#searchtype").keydown(function(event){
    
  if (event.keyCode == 13) {
        
    var search = $("#searchtype").val();
    
    $.getJSON('https://pl.wikipedia.org/w/api.php?action=opensearch&datatype=json&limit=10&search='+search+'&callback=?', function(data) {
      
      var html = "<a href=\""+data[3][0]+"\" target=\"_blank\" class=\"list-group-item\"><h4 class=\"list-group-item-headin\">"+data[1][0]+"</h4><p class=\"list-group-item-text\">"+data[2][0]+"</p></a>";
      
      for(var i=1; i<data[1].length; i++){
        
        html += "<a href=\""+data[3][i]+"\" target=\"_blank\" class=\"list-group-item\"><h4 class=\"list-group-item-headin\">"+data[1][i]+"</h4><p class=\"list-group-item-text\">"+data[2][i]+"</p></a>";
         
      };
      
      $("#articles").html(html);
      
    });
    
    $(".container").fadeIn(1000);
    $(".container").css('margin-top', '2rem');
  };
  
});

$(".icon-search").click(function(){
  
  $(".icon-search").toggleClass("toggleSearch");
  
  $(".form").toggleClass("toggleForm");
  
  $(".r-article").toggleClass("toggleArticle");
  
  $(".butt-desc").toggleClass("toggleDesc");
  
  $(".container").fadeOut(1000);
});