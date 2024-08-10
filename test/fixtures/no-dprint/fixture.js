const fadeScrollToTop = (() => {
    const _scrollButton = document.getElementById("scroll-top-button");
    
    let scrollValue = 0;
    let canTick     = false;

    function handleScrollToTop(newScrollValue)
    {
        // unfade on scroll
        classie.removeClass(_scrollButton, "scroll-faded");

        setTimeout(() => {
            // refade if stopped scrolling
            if(scrollValue === newScrollValue)
                classie.addClass(_scrollButton, "scroll-faded");
        }, 3000);

        scrollValue = newScrollValue;
    }

    document.addEventListener("scroll", () => {
        if(!canTick)
        {
            window.requestAnimationFrame(() => {
                if(window.scrollY >= 90)
                {
                    classie.removeClass(_scrollButton, "scroll-hidden");
                    handleScrollToTop(window.scrollY);
                }
                else
                    classie.addClass(_scrollButton, "scroll-hidden");

                canTick = false;
            });

            canTick = true;
        }
    });
})();