/*
	Shubham Kakadiya
	#0791153
    Assignment 05
*/

$(document).ready(function () {
    class ContentItem{
        uniqueId;
         name;
        description;
        category;
    
    constructor(uniqueId, name, description, category){
            this.uniqueId = uniqueId;
            this.name = name;
            this.description = description;
            this.category = category;
            }
    
    updateContentItem(uniqueId, name, description, category){
            if(this.uniqueId == uniqueId && name && description && category){
                this.uniqueId = uniqueId;
                this.name = name;
                this.description = description;
                this.category = category;
                }
    
            }
            toString(){
                return $('#content-item-list').append(`<div class="content-item-wrapper">
                <div id="content-item-${this.uniqueId}">
                <h2 class="name">${this.name}</h2>
                <p class="description">${this.description}</p>
                <div class="category">${this.category}</div>
                </div>
                 </div>`);
                    }
            }
            
            let content = [
            {
                "uniqueId": 0,
                "name": "Jay Patel",
                "description": "Presentation presenter",
                "category": "Employee"
            },
            {
                "uniqueId": 1,
                "name": "Dhruv Patel",
                "description": "Financial Lawyer",
                "category": "Lawyer"
            },
            {
                "uniqueId": 2,
                "name": "Darshan Patel",
                "description": "Management Department Head",
                "category": "Manager"
            },
             {
                "uniqueId": 4,
                "name": "Shubham Kakadiya",
                "description": "Full stack web developer",
                "category": "Web Developer"
            }
        
            ];
        
            $.each(content, function(key, val){
              $('#content-item-list').append(`<div class="content-item-wrapper">
                <div id="content-item-${this.uniqueId}">
                <h2 class="name">${this.name}</h2>
                <p class="description">${this.description}</p>
                <div class="category">${this.category}</div>
                </div>
            </div>`);
            });


           
            $('.content-item-wrapper').css('margin', 'auto');  
            $('.content-item-wrapper').css('marging-top', '27px');
            $('.content-item-wrapper').css('border', 'dotted 7px black');
            $('.content-item-wrapper').css('width', '40%');
            $('.content-item-wrapper').css('padding', '24px');
            $('.content-item-wrapper').css('margin-bottom', '20px');
            
        
                    

});


