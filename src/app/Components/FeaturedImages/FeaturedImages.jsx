import React from "react"; 

export default function FeaturedImage() {

    return (
        <div class="max-w-xl">
            <div class="grid gap-5">
                <div>
                    <img class="h-auto max-w-full rounded-lg" src="/Photo3.png" alt="" />
                </div>
                <div class="grid grid-cols-5 gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="/Photo8.png" alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="/Photo5.png" alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="/Photo1.png" alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="/Photo4.png" alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg" src="/Photo6.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )

};