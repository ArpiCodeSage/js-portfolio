const acc=document.getElementsByClassName("accordian");
//returns an html collection and not an array

for(let i=0;i<acc.length;i++){
    acc[i].addEventListener("click",function(){
        this.classList.toggle("active");
        const panel=this.nextElementSibling;
         if(panel.style.maxHeight)
         {
            panel.style.maxHeight=null;
         }
         else
         {
            panel.style.maxHeight=panel.scrollHeight+"px";
         }
        
    })
}
/*Here’s the crucial thing:

panel.style.maxHeight only reads the inline style set in HTML or via JS.

It does NOT read CSS rules from your stylesheet.

So even though CSS says max-height: 0, panel.style.maxHeight is initially "" (empty string).
First click:

panel.style.maxHeight = "" → falsy → goes to the else branch → panel.style.maxHeight = panel.scrollHeight + "px" → panel expands.

Second click:

Now panel.style.maxHeight = "123px" (or whatever the scrollHeight is) → truthy → goes to the if branch → panel.style.maxHeight = null → panel collapses.*/
