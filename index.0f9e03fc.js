!function(){var e=document.querySelectorAll(".card"),t=document.querySelector(".card-container"),r=new IntersectionObserver((function(e){e.forEach((function(e){e.target.classList.toggle("show",e.isIntersecting),e.isIntersecting&&r.unobserve(e.target)}))}),{threshold:1}),n=new IntersectionObserver((function(e){var c=e[0];c.isIntersecting&&(!function(){for(var e=0;e<=10;e++){var n=document.createElement("div");n.textContent="NEW",n.classList.add("card"),r.observe(n),t.append(n)}}(),n.unobserve(c.target),n.observe(document.querySelector(".card:last-child")))}));n.observe(document.querySelector(".card:last-child")),e.forEach((function(e){r.observe(e)}))}();
//# sourceMappingURL=index.0f9e03fc.js.map
