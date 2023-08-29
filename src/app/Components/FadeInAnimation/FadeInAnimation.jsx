import React from "react"; 
import { useState, useEffect } from "react"; 


export default function FadeInAnimation({delay, children}) {

    const [isShown, setIsShown] = useState(false);
    const domRef = React.useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsShown(true);
                    }
            });
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, []);

    return (
        <div className={`pop-in-section ${isShown ? "is-show" : ""}`} style={{transitionDelay: `${delay}`}} ref={domRef}>
            {children}
        </div>
    )

}